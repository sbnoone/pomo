import { useState } from 'react'

const THEME_MODE_KEY = 'pomo-theme-mode'

enum ThemeModeEnum {
	light = 'light',
	dark = 'dark',
}

export const useDarkMode = () => {
	const [mode, setMode] = useState(() => localStorage.getItem(THEME_MODE_KEY))
	const [isDarkMode, setIsDarkMode] = useState(mode === ThemeModeEnum.dark)
	const prefferDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches

	if (mode === ThemeModeEnum.dark || (!mode && prefferDarkMode)) {
		document.documentElement.classList.add(ThemeModeEnum.dark)
	} else {
		document.documentElement.classList.remove(ThemeModeEnum.dark)
	}

	const changeDarkMode = (isDarkMode: boolean) => {
		const newMode = isDarkMode ? ThemeModeEnum.dark : ThemeModeEnum.light
		localStorage.setItem(THEME_MODE_KEY, newMode)
		setMode(newMode)
		setIsDarkMode(isDarkMode)
	}

	return { isDarkMode, changeDarkMode }
}
