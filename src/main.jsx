import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes.jsx'
import { HelmetProvider } from 'react-helmet-async'
import AuthProvider from './Providers/AuthProvider.jsx'
import { ThemeProvider } from './Providers/themeProvider.jsx'
import SearchProvider from './Providers/SearchProvider.jsx'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SearchProvider>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <HelmetProvider>
            <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
              <RouterProvider router={router} />
            </ThemeProvider>
          </HelmetProvider>
        </QueryClientProvider>
      </AuthProvider>
    </SearchProvider>
  </React.StrictMode>,
)
