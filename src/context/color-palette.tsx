import { FC, PropsWithChildren, createContext, useState } from 'react'

interface IColorsPaletteContext {
	colorPalette: ColorsPaletteEnum
	changeColorPalette: (schema: ColorsPaletteEnum) => void
}

export const ColorPaletteContext = createContext({} as IColorsPaletteContext)

export enum ColorsPaletteEnum {
	blue = 'blue',
	green = 'green',
	red = 'red',
}

export const colorsPalette = Object.values(ColorsPaletteEnum)

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
