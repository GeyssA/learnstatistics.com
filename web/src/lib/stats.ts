export function mean(values: number[]): number {
  if (values.length === 0) return 0
  return values.reduce((a, b) => a + b, 0) / values.length
}

export function variance(values: number[], sample = true): number {
  if (values.length === 0) return 0
  const m = mean(values)
  const sum = values.reduce((acc, v) => acc + (v - m) ** 2, 0)
  const n = values.length
  return sample && n > 1 ? sum / (n - 1) : sum / n
}

export function stdDev(values: number[], sample = true): number {
  return Math.sqrt(variance(values, sample))
}

export function median(values: number[]): number {
  if (values.length === 0) return 0
  const sorted = [...values].sort((a, b) => a - b)
  const mid = Math.floor(sorted.length / 2)
  return sorted.length % 2 !== 0
    ? sorted[mid]
    : (sorted[mid - 1] + sorted[mid]) / 2
}

export function mode(values: number[]): number[] {
  const freq = new Map<number, number>()
  values.forEach((v) => freq.set(v, (freq.get(v) ?? 0) + 1))
  const max = Math.max(...freq.values())
  return [...freq.entries()].filter(([, c]) => c === max).map(([v]) => v)
}

export function frequencyTable(values: number[]) {
  const freq = new Map<number, number>()
  values.forEach((v) => freq.set(v, (freq.get(v) ?? 0) + 1))
  const n = values.length
  const rows = [...freq.entries()]
    .sort(([a], [b]) => a - b)
    .map(([modality, ni]) => ({
      modality,
      ni,
      fi: ni / n,
      Ni: 0,
      Fi: 0,
    }))
  let cumNi = 0
  let cumFi = 0
  rows.forEach((row) => {
    cumNi += row.ni
    cumFi += row.fi
    row.Ni = cumNi
    row.Fi = cumFi
  })
  return { rows, n }
}

export function comb(n: number, k: number): number {
  if (k < 0 || k > n) return 0
  let result = 1
  for (let i = 0; i < k; i++) result = (result * (n - i)) / (i + 1)
  return result
}

export function binomialPmf(k: number, n: number, p: number): number {
  return comb(n, k) * p ** k * (1 - p) ** (n - k)
}

export function poissonPmf(k: number, lambda: number): number {
  return (Math.exp(-lambda) * lambda ** k) / factorial(k)
}

function factorial(n: number): number {
  if (n <= 1) return 1
  let r = 1
  for (let i = 2; i <= n; i++) r *= i
  return r
}

export function normalPdf(x: number, mu: number, sigma: number): number {
  const coef = 1 / (sigma * Math.sqrt(2 * Math.PI))
  return coef * Math.exp(-0.5 * ((x - mu) / sigma) ** 2)
}

export function erf(x: number): number {
  const sign = x < 0 ? -1 : 1
  x = Math.abs(x)
  const a1 = 0.254829592
  const a2 = -0.284496736
  const a3 = 1.421413741
  const a4 = -1.453152027
  const a5 = 1.061405429
  const p = 0.3275911
  const t = 1 / (1 + p * x)
  const y =
    1 -
    (((((a5 * t + a4) * t + a3) * t + a2) * t + a1) * t * Math.exp(-x * x))
  return sign * y
}

export function normalCdf(x: number, mu: number, sigma: number): number {
  return 0.5 * (1 + erf((x - mu) / (sigma * Math.sqrt(2))))
}

export function confidenceIntervalMean(
  m: number,
  s: number,
  n: number,
  z = 1.96
): [number, number] {
  const margin = z * (s / Math.sqrt(n))
  return [m - margin, m + margin]
}

export function quartiles(values: number[]): { q1: number; q2: number; q3: number; min: number; max: number } {
  if (values.length === 0) return { q1: 0, q2: 0, q3: 0, min: 0, max: 0 }
  const sorted = [...values].sort((a, b) => a - b)
  const percentile = (p: number) => {
    const pos = (sorted.length - 1) * p
    const base = Math.floor(pos)
    const rest = pos - base
    if (sorted[base + 1] === undefined) return sorted[base]
    return sorted[base] + rest * (sorted[base + 1] - sorted[base])
  }
  return {
    min: sorted[0],
    q1: percentile(0.25),
    q2: percentile(0.5),
    q3: percentile(0.75),
    max: sorted[sorted.length - 1],
  }
}

export function groupIntoClasses(
  values: number[],
  numClasses = 8
): { lower: number; upper: number; center: number; ni: number }[] {
  const min = Math.min(...values)
  const max = Math.max(...values)
  const range = max - min || 1
  const width = range / numClasses
  const classes = Array.from({ length: numClasses }, (_, i) => ({
    lower: min + i * width,
    upper: min + (i + 1) * width,
    center: min + (i + 0.5) * width,
    ni: 0,
  }))
  values.forEach((v) => {
    let idx = Math.floor((v - min) / width)
    if (idx >= numClasses) idx = numClasses - 1
    classes[idx].ni++
  })
  return classes
}
