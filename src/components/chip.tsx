import { FC } from 'react'
import { ReactComponent as BrainSvg } from '../assets/icons/ph_brain-fill.svg'
import { ReactComponent as CoffeeSvg } from '../assets/icons/ph_coffee.svg'

const config = {
	focus: {
		icon: <BrainSvg className='stroke-blue-900 dark:stroke-blue-50' />,
		text: 'Focus',
	},
	'break-long': {
		icon: <CoffeeSvg className='stroke-blue-900 dark:stroke-blue-50' />,
		text: 'Break long',
	},
	'break-short': {
		icon: <CoffeeSvg className='stroke-blue-900 dark:stroke-blue-50' />,
		text: 'Break short',
	},
}

export const Chip: FC<{
	variant: 'focus' | 'break-long' | 'break-short'
}> = ({ variant }) => {
	return (
		<div className='flex items-center gap-x-[9px] '>
			{config[variant].icon}
			{config[variant].text}
		</div>
	)
}
