import { TimerState } from '../types'

export const TIMER_STATES = ['focus', 'break-short', 'focus', 'break-long'] as const
export const MIN_TIME_IN_SECONDS = 1
export const MAX_TIME_IN_SECONDS = 3600

export const NOTIFICATION_MESSAGES: Record<(typeof TIMER_STATES)[number], string> = {
	focus: 'Focus',
	'break-short': 'Short break',
	'break-long': 'Long break',
}
