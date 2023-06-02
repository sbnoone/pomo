import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'

import App from './App.tsx'
import { ThemeProvider } from './context/theme.tsx'
import './index.css'
import { ColorPaletteProvider } from './context/color-palette.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider>
			<ColorPaletteProvider>
				<Toaster
					position='top-right'
					toastOptions={{
						className: 'bg-blue-a-600 dark:text-blue-50 text-blue-900',
					}}
				/>
				<App />
			</ColorPaletteProvider>
		</ThemeProvider>
	</React.StrictMode>
)
