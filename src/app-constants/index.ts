export const TIMER_STATES = ['focus', 'break-short', 'focus', 'break-long'] as const
export const MIN_TIME_IN_SECONDS = 1
export const MAX_TIME_IN_SECONDS = 3600

export const DEFAULT_FOCUS_LENGTH_IN_SECONDS = 30
export const DEFAULT_SHORT_BREAK_LENGTH_IN_SECONDS = 5
export const DEFAULT_LONG_BREAK_LENGTH_IN_SECONDS = 15

export const SETTIGNS_STORE_NAME = 'settings'

export const noop = () => undefined

export const NOTIFICATION_MESSAGES: Record<(typeof TIMER_STATES)[number], string> = {
	focus: 'Focus',
	'break-short': 'Short break',
	'break-long': 'Long break',
}

export enum ColorsPaletteEnum {
	blue = 'blue',
	green = 'green',
	red = 'red',
}

export const colorsPalette = Object.values(ColorsPaletteEnum)

export enum ThemeModeEnum {
	light = 'light',
	dark = 'dark',
}
