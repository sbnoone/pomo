import { useState } from 'react'
import { toast } from 'react-hot-toast'

import { ReactComponent as PauseSvg } from './assets/icons/ph_pause-fill.svg'
import { ReactComponent as PlaySvg } from './assets/icons/ph_play-fill.svg'
import { ReactComponent as DotsSvg } from './assets/icons/ph_dots-three-outline-fill.svg'
import { ReactComponent as ForwardSvg } from './assets/icons/ph_fast-forward-fill.svg'

import { Chip } from './components/chip'
import { Button } from './components/button'
import { Timer } from './components/timer'
import { ModalProvider } from './context/modal'
import { useModal } from './hooks/use-modal'
import { SettingsModal } from './components/settings-modal'
import { useSettings } from './hooks/use-settings'
import { getTimerState, setTimerState } from './storage/settings'
import { TimerState } from './types'
import { TIMER_STATES } from './app-constants'

const notificationMessages: Record<TimerState, string> = {
	focus: 'Focus',
	'break-short': 'Short break',
	'break-long': 'Long break',
}

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

	const changeState = () => {
		setIsPlaying(false)

		const nextState = (state + 1) % TIMER_STATES.length
		setState(nextState)
		setTimerState(nextState)

		if (hasNotifications) {
			toast.success(`Current state - ${notificationMessages[TIMER_STATES[state]]}`)
		}
	}

	const initialTimes: Record<TimerState, number> = {
		focus: focusLength,
		'break-long': longBreakLength,
		'break-short': shortBreakLength,
	}
	const initialTimeInSeconds = initialTimes[TIMER_STATES[state]]

	return (
		<div className='bg-blue-50 dark:bg-blue-950 h-full flex dark:text-blue-50 text-blue-900'>
			<SettingsModal
				closeModal={closeModal}
				isOpen={isModalOpen}
			/>
			<div className='max-w-[340px] px-[10px] m-auto flex-grow'>
				<div className='flex items-center flex-col gap-y-[32px]'>
					<Chip variant={TIMER_STATES[state]} />
					<Timer
						isPlaying={isPlaying}
						initialTimeInSeconds={initialTimeInSeconds}
					/>
					<div className='flex items-center gap-x-4'>
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
