import { FC, useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import { formatSecondsToMinSec, milisecondsToSec, secondsToMs } from '../utils/time'

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
			className={clsx('text-[256px] flex flex-col leading-[85%] overflow-hidden select-none', {
				'font-extralight': !isPlaying,
				'font-extrabold': isPlaying,
			})}
		>
			<span>{min}</span>
			<span>{sec}</span>
		</div>
	)
}
