//import base react
import React from 'react'
import ReactDOM from 'react-dom/client'

//import Tanstack/react-query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

//import App component
import App from './App.tsx'

//import base CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    </React.StrictMode>
)
