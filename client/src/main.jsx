import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

if (import.meta.env.DEV) {
  // Suppress Vite HMR logs
  const originalLog = console.log;
  console.log = (...args) => {
      if (!args[0]?.includes?.('[vite] hot updated')) {
          originalLog(...args);
      }
  };
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
