import { FC, PropsWithChildren, createContext, useState } from 'react'
import { useTheme } from './theme'

const defaultSettings: {
	focusLength: number
	shortBreakLength: number
	longBreakLength: number
	isDarkMode: boolean
	hasNotifications: boolean
	setFocusLength: React.Dispatch<React.SetStateAction<number>>
	setShortBreakLength: React.Dispatch<React.SetStateAction<number>>
	setLongBreakLength: React.Dispatch<React.SetStateAction<number>>
	setIsDarkMode: (isDarkMode: boolean) => void
	setHasNotifications: React.Dispatch<React.SetStateAction<boolean>>
} = {
	focusLength: 25,
	shortBreakLength: 5,
	longBreakLength: 15,
	isDarkMode: false,
	hasNotifications: false,
	setFocusLength: () => void 0,
	setShortBreakLength: () => void 0,
	setLongBreakLength: () => void 0,
	setIsDarkMode: () => void 0,
	setHasNotifications: () => void false,
}

export const SettingsContext = createContext(defaultSettings)

export const SettingsProvider: FC<PropsWithChildren> = ({ children }) => {
	const [focusLength, setFocusLength] = useState(25)
	const [shortBreakLength, setShortBreakLength] = useState(5)
	const [longBreakLength, setLongBreakLength] = useState(15)
	const [hasNotifications, setHasNotifications] = useState(false)

	const { isDarkMode, setIsDarkMode } = useTheme()

	const value = {
		focusLength,
		shortBreakLength,
		longBreakLength,
		isDarkMode,
		hasNotifications,
		setFocusLength,
		setShortBreakLength,
		setLongBreakLength,
		setIsDarkMode,
		setHasNotifications,
	}

	return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>
}
