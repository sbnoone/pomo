import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'

import App from './App.tsx'
import { ThemeProvider } from './context/theme.tsx'
import './index.css'
import { SchemaProvider } from './context/shema.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider>
			<SchemaProvider>
				<Toaster
					position='top-right'
					toastOptions={{
						className: 'bg-blue-a-600 dark:text-blue-50 text-blue-900',
					}}
				/>
				<App />
			</SchemaProvider>
		</ThemeProvider>
	</React.StrictMode>
)
