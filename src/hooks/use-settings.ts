import { useContext } from 'react'
import { SettingsContext } from '../context/settings'

export const useSettings = () => useContext(SettingsContext)
