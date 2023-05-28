import { FC, PropsWithChildren, createContext, useEffect, useState } from 'react'
import { getIsDarkMode, setDarkMode } from '../storage/settings'

export const ThemeContext = createContext({
	isDarkMode: false,
	setIsDarkMode: (isDarkMode: boolean): void => void 0,
})

enum ThemeModeEnum {
	light = 'light',
	dark = 'dark',
}

const initialIsDarkMode = await getIsDarkMode()

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
	const [isDarkMode, _setIsDarkMode] = useState(!!initialIsDarkMode)

	useEffect(() => {
		const prefferDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
		if (isDarkMode || (initialIsDarkMode === undefined && prefferDarkMode)) {
			document.documentElement.classList.add(ThemeModeEnum.dark)
		} else {
			document.documentElement.classList.remove(ThemeModeEnum.dark)
		}
	}, [isDarkMode])

	const setIsDarkMode = (isDarkMode: boolean) => {
		setDarkMode(isDarkMode)
		_setIsDarkMode(isDarkMode)
	}
	return (
		<ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>{children}</ThemeContext.Provider>
	)
}
