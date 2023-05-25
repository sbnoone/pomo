import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'

dayjs.extend(duration)

export { dayjs }

export const secondsToMs = (s: number) => dayjs.duration(s, 's').asMilliseconds()
export const milisecondsToSec = (ms: number) => dayjs.duration(ms, 'ms').asSeconds()

export const formatSecondsToMinSec = (s: number): [minutes: string, seconds: string] => {
	const minutes = Math.floor(dayjs.duration(s, 's').asMinutes())
	const seconds = s - minutes * 60
	return [minutes.toString().padStart(2, '0'), seconds.toString().padStart(2, '0')]
}
