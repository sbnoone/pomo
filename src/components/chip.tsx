import { FC } from 'react'
import { ReactComponent as BrainSvg } from '../assets/icons/ph_brain-fill.svg'
import { ReactComponent as CoffeeSvg } from '../assets/icons/ph_coffee.svg'

const config = {
	focus: {
		icon: <BrainSvg className='stroke-primary-900 dark:stroke-primary-50' />,
		text: 'Focus',
	},
	'break-long': {
		icon: <CoffeeSvg className='stroke-primary-900 dark:stroke-primary-50' />,
		text: 'Break long',
	},
	'break-short': {
		icon: <CoffeeSvg className='stroke-primary-900 dark:stroke-primary-50' />,
		text: 'Break short',
	},
}

export const Chip: FC<{
	variant: 'focus' | 'break-long' | 'break-short'
}> = ({ variant }) => {
	return (
		<div className='flex items-center gap-x-[9px] border-2 border-solid border-primary-900 dark:border-primary-50 bg-primary-a-100 text-primary-900 dark:text-primary-50 rounded-[999px] px-4 py-2 font-medium'>
			{config[variant].icon}
			{config[variant].text}
		</div>
	)
}
