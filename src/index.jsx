import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './index.css'
import { ThemeProvider } from './Contexts/ThemeProvider'
import { BrowserRouter } from 'react-router-dom'
import { DentistaProvider } from './Contexts/DentistaProvider'
import { PacienteProvider } from './Contexts/PacienteProvider'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { AppRoutes } from './Routes'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <DentistaProvider>
          <PacienteProvider>
            <Navbar />
              <AppRoutes />
            <Footer />
          </PacienteProvider>
        </DentistaProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)