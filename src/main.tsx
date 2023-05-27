import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ModalProvider } from './context/modal.tsx'
import './index.css'
import { SettingsProvider } from './context/settings.tsx'
import { ThemeProvider } from './context/theme.tsx'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		{/* <ModalProvider> */}
		<ThemeProvider>
			<SettingsProvider>
				<Toaster
					position='top-right'
					toastOptions={{
						className: 'bg-blue-600 dark:text-blue-50 text-blue-900',
					}}
				/>
				<App />
			</SettingsProvider>
		</ThemeProvider>
		{/* </ModalProvider> */}
	</React.StrictMode>
)
