import { FC, PropsWithChildren, useState } from 'react'
import { ColorsPaletteEnum, colorsPalette } from '../../app-constants'
import { ColorPaletteContext } from './color-palette.context'

// const initialIsDarkMode = await getIsDarkMode()

export const ColorPaletteProvider: FC<PropsWithChildren> = ({ children }) => {
	const [colorPalette, setColorPalette] = useState(ColorsPaletteEnum.blue)

	const changeColorPalette = (palette: ColorsPaletteEnum) => {
		setColorPalette(palette)
		colorsPalette.forEach((s) => {
			document.documentElement.classList.remove(s)
		})
		document.documentElement.classList.add(palette)
	}
	return (
		<ColorPaletteContext.Provider value={{ colorPalette, changeColorPalette }}>
			{children}
		</ColorPaletteContext.Provider>
	)
}
