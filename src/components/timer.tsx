import { FC, useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'

dayjs.extend(duration)

const MS_IN_SECOND = 1000
const secondsToMs = (s: number) => s * MS_IN_SECOND
const milisecondsToSec = (ms: number) => ms / MS_IN_SECOND

dayjs.duration({ hours: 20, minutes: 3, seconds: 30 })
dayjs().add(3600, 's').get('h')

const formatSecondsToMinSec = (s: number): [minutes: string, seconds: string] => {
	const minutes = Math.floor(dayjs.duration(s, 's').asMinutes())
	const seconds = s - minutes * 60
	return [minutes.toString().padStart(2, '0'), seconds.toString().padStart(2, '0')]
}

export const Timer: FC<{ isPlaying: boolean; initialTimeInSeconds: number }> = ({
	isPlaying,
	initialTimeInSeconds,
}) => {
	const currentTime = useRef(secondsToMs(initialTimeInSeconds))
	const previousTime = useRef(currentTime.current)
	const [timer, setTimer] = useState(initialTimeInSeconds)

	useEffect(() => {
		setTimer(initialTimeInSeconds)
		currentTime.current = secondsToMs(initialTimeInSeconds)
	}, [initialTimeInSeconds])

	useEffect(() => {
		if (!isPlaying || currentTime.current <= 0) return

		const effectInitialTimeMs: number = currentTime.current
		let effectInitialTimeStamp: number | undefined = undefined
		let rafId = 0

		const step = (timestampMs: number) => {
			if (effectInitialTimeStamp === undefined) {
				effectInitialTimeStamp = timestampMs
			}
			const elapsedTime = timestampMs - effectInitialTimeStamp
			currentTime.current = effectInitialTimeMs - elapsedTime

			if (currentTime.current <= 0) {
				setTimer(0)
				console.log('cancelAnimationFrame(zero)', rafId, currentTime.current)
				cancelAnimationFrame(rafId)
			} else {
				const seconds = Math.floor(milisecondsToSec(currentTime.current))
				const isUpdate = seconds !== Math.floor(milisecondsToSec(previousTime.current))
				previousTime.current = currentTime.current

				if (isUpdate) {
					setTimer(seconds)
				}

				if (isPlaying) {
					rafId = requestAnimationFrame(step)
				}
			}
		}

		rafId = requestAnimationFrame(step)

		return () => {
			console.log('cancelAnimationFrame(pause)', rafId, currentTime.current)
			cancelAnimationFrame(rafId)
		}
	}, [isPlaying])

	const [min, sec] = formatSecondsToMinSec(timer)

	return (
		<div
			className={clsx('text-[256px] flex flex-col leading-[85%] overflow-hidden', {
				'font-extralight': !isPlaying,
				'font-extrabold': isPlaying,
			})}
		>
			<span>{min}</span>
			<span>{sec}</span>
		</div>
	)
}
