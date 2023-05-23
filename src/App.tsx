import { useEffect, useRef, useState } from 'react'
import { ReactComponent as PlaySvg } from './assets/icons/ph_play-fill.svg'
import { ReactComponent as DotsSvg } from './assets/icons/ph_dots-three-outline-fill.svg'
import { ReactComponent as ForwardSvg } from './assets/icons/ph_fast-forward-fill.svg'

import { Chip } from './components/chip'
import { Button } from './components/button'
import clsx from 'clsx'
import dayjs from 'dayjs'

const ONE_SECOND = 1000
const ONE_MINUTE_IN_SEC = 60 * 1000

function App() {
	const currentTime = useRef(ONE_MINUTE_IN_SEC)
	const previousTime = useRef(currentTime.current)
	const [timer, setTimer] = useState(ONE_MINUTE_IN_SEC)
	const [isPlaying, setIsPlaying] = useState(false)

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
				const seconds = Math.floor(currentTime.current)
				const isUpdate = seconds !== Math.floor(previousTime.current)
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

	const [min, sec] = dayjs(timer).format('mm:ss').split(':')
	return (
		<div className='bg-blue-50 dark:bg-blue-950 h-full flex dark:text-blue-50 text-blue-900'>
			<div className='max-w-[340px] px-[10px] m-auto flex-grow'>
				<div className='flex items-center flex-col gap-y-[32px]'>
					<Chip variant='focus' />
					<div
						className={clsx('text-[256px] flex flex-col leading-[85%]', {
							'font-normal': true,
							'font-extrabold': false,
						})}
					>
						<span>{min}</span>
						<span>{sec}</span>
					</div>
					<div className='flex items-center gap-x-4'>
						<Button
							size='md'
							variant='secondary'
						>
							<DotsSvg />
						</Button>
						<Button
							size='lg'
							variant='primary'
							onClick={
								() => setIsPlaying(!isPlaying)
								// timerState === 'initial' || timerState === 'paused' ? startTimer : pauseTimer
							}
						>
							<PlaySvg />
						</Button>
						<Button
							size='md'
							variant='secondary'
						>
							<ForwardSvg />
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
