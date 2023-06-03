import { useContext } from 'react'
import { ThemeContext } from '../context/theme/theme.context'

export const useTheme = () => useContext(ThemeContext)
