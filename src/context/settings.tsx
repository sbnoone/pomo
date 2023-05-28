import { FC, PropsWithChildren, createContext, useEffect, useState } from 'react'
import { getStoredSettings, setSettings } from '../storage/settings'

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

// Top level await is great!
const initialSettings = await getStoredSettings()

export const SettingsProvider: FC<PropsWithChildren> = ({ children }) => {
	const [focusLength, setFocusLength] = useState(initialSettings?.focusLength ?? 25)
	const [shortBreakLength, setShortBreakLength] = useState(initialSettings?.shortBreakLength ?? 5)
	const [longBreakLength, setLongBreakLength] = useState(initialSettings?.longBreakLength ?? 15)
	const [hasNotifications, setHasNotifications] = useState(initialSettings?.notifications ?? true)

	useEffect(() => {
		setSettings({ focusLength, shortBreakLength, longBreakLength, notifications: hasNotifications })
	}, [focusLength, shortBreakLength, longBreakLength, hasNotifications])

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
