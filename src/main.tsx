import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ModalProvider } from './context/modal.tsx'
import './index.css'
import { SettingsProvider } from './context/settings.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		{/* <ModalProvider> */}
		<SettingsProvider>
			<App />
		</SettingsProvider>
		{/* </ModalProvider> */}
	</React.StrictMode>
)
