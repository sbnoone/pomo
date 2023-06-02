import { RadioGroup } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { ColorsPaletteEnum, colorsPalette } from '../context/color-palette'
import { useColorPalette } from '../hooks/use-schema'
import clsx from 'clsx'

export const ColorPaletteRadioGroup = () => {
	const { colorPalette, changeColorPalette } = useColorPalette()

	// const [palette, setPalette] = useState<ColorsPaletteEnum>(colorsPalette[0])
	console.log(colorPalette)
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
						{({ active, checked }) => (
							<li
								className={clsx(
									'w-6 h-6 rounded-full bg-black-200 dark:bg-white-200 relative before:absolute before:w-4 before:h-4 before:rounded-full before:top-1 before:left-1 cursor-pointer before:bg-primary-a-600',
									{
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
