import { RadioGroup } from '@headlessui/react'
import { Fragment } from 'react'
import clsx from 'clsx'

import { ColorsPaletteEnum, colorsPalette } from '../context/color-palette'
import { useColorPalette } from '../hooks/use-schema'

export const ColorPaletteRadioGroup = () => {
	const { colorPalette, changeColorPalette } = useColorPalette()
	return (
		<RadioGroup
			value={colorPalette}
			onChange={changeColorPalette}
			as='ul'
			className='flex gap-2'
		>
			<RadioGroup.Label className='sr-only'>Color palette</RadioGroup.Label>
			{colorsPalette.map((color) => {
				console.log(color)
				return (
					<RadioGroup.Option
						key={color}
						value={color}
						as={Fragment}
					>
						{({ checked }) => (
							<li
								className={clsx(
									'w-6 h-6 rounded-full bg-black-100 dark:bg-white-100 relative before:absolute before:w-4 before:h-4 before:rounded-full before:top-1 before:left-1 cursor-pointer  hover:before:bg-primary-a-700 transition-colors',
									{
										'before:bg-primary-a-800': checked,
										'before:bg-primary-a-300': !checked,
										red: color === ColorsPaletteEnum.red,
										green: color === ColorsPaletteEnum.green,
										blue: color === ColorsPaletteEnum.blue,
									}
								)}
							>
								<span className='sr-only'>{color}</span>
							</li>
						)}
					</RadioGroup.Option>
				)
			})}
		</RadioGroup>
	)
}
