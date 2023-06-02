import { FC, PropsWithChildren, createContext, useState } from 'react'

interface IThemeContext {
	colorPalette: string
	changeColorPalette: (schema: ColorsPaletteEnum) => void
}

export const ColorPaletteContext = createContext({} as IThemeContext)

export enum ColorsPaletteEnum {
	red = 'red',
	green = 'green',
	blue = 'blue',
}

// const initialIsDarkMode = await getIsDarkMode()

export const ColorPaletteProvider: FC<PropsWithChildren> = ({ children }) => {
	const [colorPalette, setColorPalette] = useState(ColorsPaletteEnum.blue)

	const changeColorPalette = (palette: ColorsPaletteEnum) => {
		setColorPalette(palette)
		Object.values(ColorsPaletteEnum).forEach((s) => {
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
