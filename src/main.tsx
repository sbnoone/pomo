import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'

import App from './App.tsx'
import { ThemeProvider } from './context/theme.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider>
			<Toaster
				position='top-right'
				toastOptions={{
					className: 'bg-blue-600 dark:text-blue-50 text-blue-900',
				}}
			/>
			<App />
		</ThemeProvider>
	</React.StrictMode>
)
