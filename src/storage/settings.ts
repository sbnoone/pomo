import { DBSchema, openDB } from 'idb'
import { TIMER_STATES } from '../app-constants'

interface Settings {
	focusLength: number
	shortBreakLength: number
	longBreakLength: number
	notifications: boolean
}

interface AppDB extends DBSchema {
	settings: {
		key: string
		value: Partial<Settings>
	}
	darkmode: {
		key: string
		value: boolean
	}
	state: {
		key: string
		value: number
	}
}

const appdb = await openDB<AppDB>('pomo', 1, {
	async upgrade(database) {
		database.createObjectStore('settings')
		database.createObjectStore('darkmode')
		database.createObjectStore('state')
	},
})

export async function getStoredSettings() {
	return appdb.get('settings', 'settings').catch(() => undefined)
}

export async function setSettings(value: Partial<Settings>) {
	return appdb.put('settings', value, 'settings').catch(() => undefined)
}

export async function getIsDarkMode() {
	return appdb.get('darkmode', 'darkmode').catch(() => undefined)
}

export async function setDarkMode(isDarkMode: boolean) {
	return appdb.put('darkmode', isDarkMode, 'darkmode').catch(() => undefined)
}

export async function getTimerState() {
	const state = await appdb.get('state', 'state').catch(() => undefined)
	return typeof state !== 'number' || state < 0 || state > TIMER_STATES.length ? 0 : state
}

export async function setTimerState(state: number) {
	return appdb.put('state', state, 'state').catch(() => undefined)
}
