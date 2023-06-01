import { useContext } from 'react'
import { SchemaContext } from '../context/shema'

export const useSchema = () => useContext(SchemaContext)
