import { FC, PropsWithChildren, createContext, useContext, useState } from 'react'
import { useDarkMode } from '../hooks/use-dark-mode'

const defaultSettings = {
	focusLength: 25,
	shortBreakLength: 5,
	longBreakLength: 15,
	isDarkMode: false,
	hasNotifications: false,
}

export const SettingsContext = createContext({} as any)

export const useSettings = () => useContext(SettingsContext)

export const SettingsProvider: FC<PropsWithChildren> = ({ children }) => {
	const [focusLength, setFocusLength] = useState(25)
	const [shortBreakLength, setShortBreakLength] = useState(5)
	const [longBreakLength, setLongBreakLength] = useState(15)
	const [hasNotifications, setHasNotifications] = useState(false)

	const { isDarkMode, changeDarkMode } = useDarkMode()
	const value = {
		focusLength,
		shortBreakLength,
		longBreakLength,
		isDarkMode,
		hasNotifications,
		setFocusLength,
		setShortBreakLength,
		setLongBreakLength,
		changeDarkMode,
		setHasNotifications,
	}

	return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>
}
