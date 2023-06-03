import { createContext } from 'react'

interface IThemeContext {
	isDarkMode: boolean
	setIsDarkMode: (isDarkMode: boolean) => void
}

export const ThemeContext = createContext({} as IThemeContext)
