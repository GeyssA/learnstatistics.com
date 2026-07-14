export const CHART = {
  height: 280,
  colors: {
    primary: '#0c87e9',
    primaryLight: '#38bdf8',
    secondary: '#10b981',
    accent: '#d97706',
    violet: '#7c3aed',
    rose: '#e11d48',
    grid: '#e2e8f0',
    text: '#475569',
    tooltipBg: '#0f172a',
  },
} as const

export function chartTooltipStyle() {
  return {
    backgroundColor: CHART.colors.tooltipBg,
    border: 'none',
    borderRadius: 8,
    color: '#f8fafc',
    fontSize: 13,
    padding: '8px 12px',
    boxShadow: '0 4px 12px rgba(15,23,42,0.15)',
  }
}
