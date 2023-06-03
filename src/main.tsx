import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'

import { ColorPaletteProvider } from './context/color-palette/color-palette.provider'
import { ThemeProvider } from './context/theme/theme.provider'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider>
			<ColorPaletteProvider>
				<Toaster
					position='top-right'
					toastOptions={{
						className: 'bg-primary-a-600 dark:text-primary-50 text-primary-900',
					}}
				/>
				<App />
			</ColorPaletteProvider>
		</ThemeProvider>
	</React.StrictMode>
)
