import { Switch as HeadlessSwitch } from '@headlessui/react'
import clsx from 'clsx'
import { useState } from 'react'

export const Switch = () => {
	const [checked, setChecked] = useState(false)
	return (
		<HeadlessSwitch
			checked={checked}
			onChange={setChecked}
			className={clsx('relative inline-flex h-5 w-[34px] items-center rounded-full', {
				'bg-black-200': !checked,
				'bg-blue-600': checked,
			})}
		>
			<span className='sr-only'>Enable notifications</span>
			<span
				className={clsx('inline-block h-4 w-4 transform rounded-full bg-blue-50 transition', {
					'translate-x-0.5': !checked,
					'translate-x-4': checked,
				})}
			/>
		</HeadlessSwitch>
	)
}
