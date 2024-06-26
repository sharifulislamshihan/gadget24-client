import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes.jsx'
import { HelmetProvider } from 'react-helmet-async'
import AuthProvider from './Providers/AuthProvider.jsx'
import { ThemeProvider } from './Providers/themeProvider.jsx'
import SearchProvider from './Providers/SearchProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SearchProvider>
      <AuthProvider>
        <HelmetProvider>
          <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <RouterProvider router={router} />
          </ThemeProvider>
        </HelmetProvider>
      </AuthProvider>
    </SearchProvider>
  </React.StrictMode>,
)
