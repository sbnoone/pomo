import { FC, PropsWithChildren, createContext, useState } from 'react'

interface IThemeContext {
	schema: string
	changeSchema: (schema: SchemasEnum) => void
}

export const SchemaContext = createContext({} as IThemeContext)

export enum SchemasEnum {
	red = 'red',
	green = 'green',
	blue = 'blue',
}

// const initialIsDarkMode = await getIsDarkMode()

export const SchemaProvider: FC<PropsWithChildren> = ({ children }) => {
	const [schema, setSchema] = useState(SchemasEnum.blue)

	const changeSchema = (schema: SchemasEnum) => {
		setSchema(schema)
		Object.values(SchemasEnum).forEach((s) => {
			document.documentElement.classList.remove(s)
		})
		document.documentElement.classList.add(schema)
	}
	return (
		<SchemaContext.Provider value={{ schema, changeSchema }}>{children}</SchemaContext.Provider>
	)
}
