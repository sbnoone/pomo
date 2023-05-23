import { useState } from 'react'
import { ReactComponent as PauseSvg } from './assets/icons/ph_pause-fill.svg'
import { ReactComponent as PlaySvg } from './assets/icons/ph_play-fill.svg'
import { ReactComponent as DotsSvg } from './assets/icons/ph_dots-three-outline-fill.svg'
import { ReactComponent as ForwardSvg } from './assets/icons/ph_fast-forward-fill.svg'

import { Chip } from './components/chip'
import { Button } from './components/button'
import clsx from 'clsx'

import { Timer } from './components/timer'

function App() {
	const [isPlaying, setIsPlaying] = useState(false)

	const toggleTimer = () => {
		setIsPlaying(!isPlaying)
	}

	return (
		<div className='bg-blue-50 dark:bg-blue-950 h-full flex dark:text-blue-50 text-blue-900'>
			<div className='max-w-[340px] px-[10px] m-auto flex-grow'>
				<div className='flex items-center flex-col gap-y-[32px]'>
					<Chip variant='focus' />
					<Timer isPlaying={isPlaying} />
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
							onClick={toggleTimer}
						>
							{isPlaying ? <PauseSvg /> : <PlaySvg />}
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
