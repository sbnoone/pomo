import { create } from 'zustand'
import { persist, PersistStorage, StorageValue } from 'zustand/middleware'
import { initialSettings, Settings } from '../storage/settings'
import { appdb } from '../storage/settings'
import {
	DEFAULT_FOCUS_LENGTH_IN_SECONDS,
	DEFAULT_LONG_BREAK_LENGTH_IN_SECONDS,
	DEFAULT_SHORT_BREAK_LENGTH_IN_SECONDS,
	noop,
} from '../app-constants'

interface SettingsStore {
	focusLength: number
	shortBreakLength: number
	longBreakLength: number
	hasNotifications: boolean
	setFocusLength: (length: number) => void
	setShortBreakLength: (length: number) => void
	setLongBreakLength: (length: number) => void
	setHasNotifications: (enabled: boolean) => void
}

const idbSettingsStorage: PersistStorage<Partial<Settings>> = {
	async getItem(key: string) {
		try {
			const item = await appdb.get('settings', key)

			if (!item) {
				return null
			}
			const storageValue: StorageValue<Partial<Settings>> = {
				state: item.state,
			}
			return storageValue
		} catch (e) {
			return null
		}
	},
	setItem(name: string, value: StorageValue<Partial<Settings>>) {
		appdb.put('settings', value, name).catch(noop)
	},
	removeItem(name: string) {
		appdb.delete('settings', name).catch(noop)
	},
}

export const useSettings = create<SettingsStore>()(
	persist(
		(set) => ({
			focusLength: initialSettings?.state.focusLength ?? DEFAULT_FOCUS_LENGTH_IN_SECONDS,
			shortBreakLength:
				initialSettings?.state.shortBreakLength ?? DEFAULT_SHORT_BREAK_LENGTH_IN_SECONDS,
			longBreakLength:
				initialSettings?.state.longBreakLength ?? DEFAULT_LONG_BREAK_LENGTH_IN_SECONDS,
			hasNotifications: !!initialSettings?.state.notifications,
			setFocusLength: (length) => set({ focusLength: length }),
			setLongBreakLength: (length) => set({ longBreakLength: length }),
			setShortBreakLength: (length) => set({ shortBreakLength: length }),
			setHasNotifications: (enabled) => set({ hasNotifications: enabled }),
		}),
		{
			name: 'settings',
			storage: idbSettingsStorage,
			version: 1,
			partialize(state) {
				return {
					focusLength: state.focusLength,
					longBreakLength: state.longBreakLength,
					shortBreakLength: state.shortBreakLength,
					notifications: state.hasNotifications,
				}
			},
		}
	)
)
