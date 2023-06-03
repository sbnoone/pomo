import { useContext } from 'react'
import { ColorPaletteContext } from '../context/color-palette/color-palette.context'

export const useColorPalette = () => useContext(ColorPaletteContext)
