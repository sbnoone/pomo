import { FC, PropsWithChildren, createContext, useContext, useEffect, useState } from 'react'

export const ThemeContext = createContext({
	isDarkMode: false,
	setIsDarkMode: (isDarkMode: boolean): void => void 0,
})

const THEME_MODE_KEY = 'pomo-theme-mode'

enum ThemeModeEnum {
	light = 'light',
	dark = 'dark',
}

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
	const [mode, setMode] = useState(() => localStorage.getItem(THEME_MODE_KEY))
	const [isDarkMode, _setIsDarkMode] = useState(mode === ThemeModeEnum.dark)

	useEffect(() => {
		const prefferDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
		if (mode === ThemeModeEnum.dark || (!mode && prefferDarkMode)) {
			document.documentElement.classList.add(ThemeModeEnum.dark)
		} else {
			document.documentElement.classList.remove(ThemeModeEnum.dark)
		}
	}, [mode])

	const setIsDarkMode = (isDarkMode: boolean) => {
		const newMode = isDarkMode ? ThemeModeEnum.dark : ThemeModeEnum.light
		localStorage.setItem(THEME_MODE_KEY, newMode)
		setMode(newMode)
		_setIsDarkMode(isDarkMode)
	}
	return (
		<ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>{children}</ThemeContext.Provider>
	)
}
