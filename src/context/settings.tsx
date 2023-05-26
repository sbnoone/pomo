import { FC, PropsWithChildren, createContext, useState } from 'react'

const defaultSettings: {
	focusLength: number
	shortBreakLength: number
	longBreakLength: number
	hasNotifications: boolean
	setFocusLength: React.Dispatch<React.SetStateAction<number>>
	setShortBreakLength: React.Dispatch<React.SetStateAction<number>>
	setLongBreakLength: React.Dispatch<React.SetStateAction<number>>
	setHasNotifications: React.Dispatch<React.SetStateAction<boolean>>
} = {
	focusLength: 25,
	shortBreakLength: 5,
	longBreakLength: 15,
	hasNotifications: false,
	setFocusLength: () => void 0,
	setShortBreakLength: () => void 0,
	setLongBreakLength: () => void 0,
	setHasNotifications: () => void false,
}

export const SettingsContext = createContext(defaultSettings)

export const SettingsProvider: FC<PropsWithChildren> = ({ children }) => {
	const [focusLength, setFocusLength] = useState(25)
	const [shortBreakLength, setShortBreakLength] = useState(5)
	const [longBreakLength, setLongBreakLength] = useState(15)
	const [hasNotifications, setHasNotifications] = useState(false)

	const value = {
		focusLength,
		shortBreakLength,
		longBreakLength,
		hasNotifications,
		setFocusLength,
		setShortBreakLength,
		setLongBreakLength,
		setHasNotifications,
	}

	return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>
}
