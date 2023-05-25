import { Switch as HeadlessSwitch, SwitchProps } from '@headlessui/react'
import clsx from 'clsx'
import { FC } from 'react'

export const Switch: FC<SwitchProps<'button'>> = ({ checked, onChange }) => {
	return (
		<HeadlessSwitch
			checked={checked}
			onChange={onChange}
			className={clsx('relative inline-flex h-5 w-[34px] items-center rounded-full', {
				'bg-black-200 dark:bg-white-200': !checked,
				'bg-blue-600': checked,
			})}
		>
			<span className='sr-only'>Enable dark mode</span>
			<span
				className={clsx(
					'inline-block h-4 w-4 transform rounded-full bg-blue-50 dark:bg-blue-950 transition',
					{
						'translate-x-0.5': !checked,
						'translate-x-4': checked,
					}
				)}
			/>
		</HeadlessSwitch>
	)
}
