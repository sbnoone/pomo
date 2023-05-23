import clsx from 'clsx'
import dayjs from 'dayjs'
import { FC, useEffect, useRef, useState } from 'react'

const SECOND_IN_MS = 1000
const ONE_MINUTE_IN_SEC = 60
const FIVE_MIN = 5 * ONE_MINUTE_IN_SEC

export const Timer: FC<{ isPlaying: boolean }> = ({ isPlaying }) => {
	const currentTime = useRef(FIVE_MIN * SECOND_IN_MS)
	const previousTime = useRef(currentTime.current)
	const [timer, setTimer] = useState(FIVE_MIN)

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
				const seconds = Math.floor(currentTime.current / SECOND_IN_MS)
				const isUpdate = seconds !== Math.floor(previousTime.current / SECOND_IN_MS)
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

	const [min, sec] = dayjs(timer * SECOND_IN_MS)
		.format('mm:ss')
		.split(':')

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
