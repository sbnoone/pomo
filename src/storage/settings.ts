import { DBSchema, openDB } from 'idb'
import { TIMER_STATES, noop } from '../app-constants'
import { StorageValue } from 'zustand/middleware'

export interface Settings {
	focusLength: number
	shortBreakLength: number
	longBreakLength: number
	notifications: boolean
}

interface AppDB extends DBSchema {
	settings: {
		key: string
		value: StorageValue<Partial<Settings>>
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

export const appdb = await openDB<AppDB>('pomo', 1, {
	async upgrade(database) {
		database.createObjectStore('settings')
		database.createObjectStore('darkmode')
		database.createObjectStore('state')
	},
})

export const initialSettings = await appdb.get('settings', 'settings').catch(noop)

export const initialIsDarkMode = await appdb.get('darkmode', 'darkmode').catch(noop)

export const initialTimerState = await getTimerState()

async function getTimerState() {
	const state = await appdb.get('state', 'state').catch(noop)
	return typeof state !== 'number' || state < 0 || state > TIMER_STATES.length ? 0 : state
}
