import { FC, PropsWithChildren, useEffect, useState } from 'react'
import { getIsDarkMode, setDarkMode } from '../../storage/settings'
import { ThemeModeEnum } from '../../app-constants'
import { ThemeContext } from './theme.context'

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
