import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ModalProvider } from './context/modal.tsx'
import './index.css'
import { SettingsProvider } from './context/settings.tsx'
import { ThemeProvider } from './context/theme.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		{/* <ModalProvider> */}
		<ThemeProvider>
			<SettingsProvider>
				<App />
			</SettingsProvider>
		</ThemeProvider>
		{/* </ModalProvider> */}
	</React.StrictMode>
)
