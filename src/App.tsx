import clsx from 'clsx'
import { useState } from 'react'

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
import { useSettings } from './context/settings'
import dayjs from 'dayjs'

let s = 0
function test() {
	console.log(s)
	s = (s + 1) % 3
}

function App() {
	const { focusLength, shortBreakLength, longBreakLength } = useSettings()
	const [state, setState] = useState<'focus' | 'break-long' | 'break-short'>('focus')
	const [isPlaying, setIsPlaying] = useState(false)
	const [isModalOpen, setIsModalOpen] = useState(false)
	const toggleTimer = () => {
		setIsPlaying(!isPlaying)
	}

	const openModal = () => setIsModalOpen(true)
	const closeModal = () => setIsModalOpen(false)

	const changeState = () => {
		setIsPlaying(false)
		if (state === 'focus') {
			setState('break-short')
			return
		}
		if (state === 'break-short') {
			setState('break-long')
			return
		}
		setState('focus')
	}

	const initialTimes = {
		focus: focusLength,
		'break-long': longBreakLength,
		'break-short': shortBreakLength,
	}

	return (
		<div className='bg-blue-50 dark:bg-blue-950 h-full flex dark:text-blue-50 text-blue-900'>
			{isModalOpen && <SettingsModal closeModal={closeModal} />}
			<div className='max-w-[340px] px-[10px] m-auto flex-grow'>
				<div className='flex items-center flex-col gap-y-[32px]'>
					<Chip variant={state} />
					<Timer
						isPlaying={isPlaying}
						initialTimeInSeconds={initialTimes[state]}
					/>
					<div className='flex items-center gap-x-4'>
						<Button
							size='md'
							variant='secondary'
							onClick={openModal}
						>
							<DotsSvg />
						</Button>
						<Button
							size='lg'
							variant='primary'
							onClick={toggleTimer}
						>
							{isPlaying ? <PauseSvg /> : <PlaySvg />}
						</Button>
						<Button
							size='md'
							variant='secondary'
							onClick={changeState}
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
