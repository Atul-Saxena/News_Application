import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import GlobalProvider from './context/global.context'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </StrictMode>,
)
