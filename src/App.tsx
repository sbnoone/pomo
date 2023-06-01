import { useState } from 'react'
import { toast } from 'react-hot-toast'

import { ReactComponent as PauseSvg } from './assets/icons/ph_pause-fill.svg'
import { ReactComponent as PlaySvg } from './assets/icons/ph_play-fill.svg'
import { ReactComponent as DotsSvg } from './assets/icons/ph_dots-three-outline-fill.svg'
import { ReactComponent as ForwardSvg } from './assets/icons/ph_fast-forward-fill.svg'

import { Chip } from './components/chip'
import { Button } from './components/button'
import { Timer } from './components/timer'
import { SettingsModal } from './components/settings-modal'
import { getTimerState, setTimerState } from './storage/settings'
import { TimerState } from './types'
import { NOTIFICATION_MESSAGES, TIMER_STATES } from './app-constants'
import { useSettings } from './store/settings'

const initialState = await getTimerState()

function App() {
	const { focusLength, shortBreakLength, longBreakLength, hasNotifications } = useSettings()
	const [state, setState] = useState(initialState ?? 0)
	const [isPlaying, setIsPlaying] = useState(false)
	const [isModalOpen, setIsModalOpen] = useState(false)

	const toggleTimer = () => {
		setIsPlaying(!isPlaying)
	}

	const openModal = () => setIsModalOpen(true)
	const closeModal = () => setIsModalOpen(false)

	const nextStep = () => {
		setIsPlaying(false)
		const nextState = (state + 1) % TIMER_STATES.length
		setState(nextState)
		setTimerState(nextState)
	}

	const changeState = () => {
		nextStep()

		if (hasNotifications) {
			toast.success(`Current state - ${NOTIFICATION_MESSAGES[TIMER_STATES[state]]}`)
		}
	}

	const onTimerComplete = () => {
		nextStep()
		toast.success(`${NOTIFICATION_MESSAGES[TIMER_STATES[state]]} timer is complete!`)
	}

	const initialTimes: Record<TimerState, number> = {
		focus: focusLength,
		'break-long': longBreakLength,
		'break-short': shortBreakLength,
	}
	const initialTimeInSeconds = initialTimes[TIMER_STATES[state]]

	return (
		<div className='h-full flex bg-primary-50 dark:bg-primary-950 text-primary-900 dark:text-primary-50'>
			<SettingsModal
				closeModal={closeModal}
				isOpen={isModalOpen}
			/>
			<div className='max-w-[340px] px-[10px] m-auto flex-grow'>
				<div className='flex items-center flex-col gap-y-3 md:gap-y-8'>
					<Chip variant={TIMER_STATES[state]} />
					<Timer
						onComplete={onTimerComplete}
						isPlaying={isPlaying}
						initialTimeInSeconds={initialTimeInSeconds}
					/>
					<div className='flex items-center gap-x-2 xs:gap-x-4'>
						<Button
							size='md'
							variant='secondary'
							onClick={openModal}
						>
							<span className='sr-only'>settings</span>
							<DotsSvg />
						</Button>
						<Button
							size='lg'
							variant='primary'
							onClick={toggleTimer}
						>
							<span className='sr-only'>{isPlaying ? 'pause' : 'play'}</span>
							{isPlaying ? <PauseSvg /> : <PlaySvg />}
						</Button>
						<Button
							size='md'
							variant='secondary'
							onClick={changeState}
						>
							<span className='sr-only'>next state</span>
							<ForwardSvg />
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
