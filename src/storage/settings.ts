import { DBSchema, openDB } from 'idb'

interface Settings {
	focusLength: number
	shortBreakLength: number
	longBreakLength: number
	notifications: boolean
	darkMode: boolean
}

interface AppDB extends DBSchema {
	settings: {
		key: string
		value: Settings
	}
}

const appdb = openDB<AppDB>('pomo', 1, {
	async upgrade(database) {
		database.createObjectStore('settings')
	},
})

setSettings({
	focusLength: 60,
	shortBreakLength: 15,
	longBreakLength: 30,
	notifications: true,
	darkMode: true,
})

export async function getSettings() {
	return (await appdb).get('settings', 'settings')
}

export async function setSettings(value: Settings) {
	return await (await appdb).put('settings', value, 'settings')
}
