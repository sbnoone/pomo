import { Dialog } from '@headlessui/react'
import { FC } from 'react'
import { ReactComponent as XSvg } from '../assets/icons/ph_x.svg'

import { Button } from './button'
import { Switch } from './switch'
import { InputNumber } from './input-number'
import { useSettings } from '../context/settings'

export const SettingsModal: FC<{ closeModal: () => void }> = ({ closeModal }) => {
	const {
		focusLength,
		shortBreakLength,
		longBreakLength,
		isDarkMode,
		hasNotifications,
		setFocusLength,
		setShortBreakLength,
		setLongBreakLength,
		setIsDarkMode,
		setHasNotifications,
	} = useSettings()
	return (
		<Dialog
			open
			onClose={closeModal}
			className='relative z-50 text-blue-900 dark:text-blue-50'
		>
			<div className='fixed inset-0 flex items-center justify-center p-4'>
				<Dialog.Panel className='flex flex-col bg-blue-50 dark:bg-blue-950 max-w-[448px] rounded-md shadow-modal w-full overflow-hidden'>
					<Dialog.Title className='font-bold flex justify-between p-6'>
						<span className='text-lg leading-7'>Settings</span>
						<Button
							size='sm'
							variant='transparent'
						>
							<XSvg className='w-[18px] h-[18px]' />
						</Button>
					</Dialog.Title>

					<ul className='flex flex-col pb-4'>
						<li className='px-6 h-16 flex justify-between items-center'>
							<p>Dark mode</p>
							<Switch
								checked={isDarkMode}
								onChange={setIsDarkMode}
							/>
						</li>
						<li className='px-6 h-16 flex justify-between items-center'>
							<p>Focus length</p>
							<InputNumber
								value={focusLength}
								min={1}
								max={3600}
								onChange={setFocusLength}
							/>
						</li>
						<li className='px-6 h-16 flex justify-between items-center'>
							<p>Short break length</p>
							<InputNumber
								value={shortBreakLength}
								min={1}
								max={3600}
								onChange={setShortBreakLength}
							/>
						</li>
						<li className='px-6 h-16 flex justify-between items-center'>
							<p>Long break length</p>
							<InputNumber
								value={longBreakLength}
								min={1}
								max={3600}
								onChange={setLongBreakLength}
							/>
						</li>
						<li className='px-6 h-16 flex justify-between items-center'>
							<p>Notifications</p>
							<Switch
								checked={hasNotifications}
								onChange={setHasNotifications}
							/>
						</li>
					</ul>
				</Dialog.Panel>
			</div>
		</Dialog>
	)
}
