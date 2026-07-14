import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'katex/dist/katex.min.css'
import './index.css'
import App from './App.tsx'
import { AccessProvider } from './context/AccessContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AccessProvider>
      <App />
    </AccessProvider>
  </StrictMode>,
)
