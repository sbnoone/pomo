import { FC, PropsWithChildren, useEffect, useState } from 'react'
import { appdb, initialIsDarkMode } from '../../storage/settings'
import { ThemeModeEnum, noop } from '../../app-constants'
import { ThemeContext } from './theme.context'

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
		appdb.put('darkmode', isDarkMode, 'darkmode').catch(noop)
		_setIsDarkMode(isDarkMode)
	}
	return (
		<ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>{children}</ThemeContext.Provider>
	)
}
