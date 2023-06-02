import { useContext } from 'react'
import { ColorPaletteContext } from '../context/color-palette'

export const useColorPalette = () => useContext(ColorPaletteContext)
