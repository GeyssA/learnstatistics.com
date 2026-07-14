import { HashRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { AccessGate } from './components/AccessGate'
import { HomePage } from './pages/HomePage'
import { ModulePage } from './pages/ModulePage'
import { ExamenPage } from './pages/ExamenPage'

export default function App() {
  return (
    <HashRouter>
      <AccessGate>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/module/:moduleId" element={<ModulePage />} />
            <Route path="/examen" element={<ExamenPage />} />
          </Route>
        </Routes>
      </AccessGate>
    </HashRouter>
  )
}
