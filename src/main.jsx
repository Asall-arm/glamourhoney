import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./Components/Dashboard/cms.css"
import ThemeProvider from './context/ThemeProvider.jsx'

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  </ThemeProvider>
)
