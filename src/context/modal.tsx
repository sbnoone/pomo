/* eslint-disable @typescript-eslint/no-empty-function */
import { FC, PropsWithChildren, createContext, useContext, useState } from 'react'
import { SettingsModal } from '../components/settings-modal'

export const ModalContext = createContext({
	isOpen: false,
	openModal: () => {},
	closeModal: () => {},
})

export const ModalProvider: FC<PropsWithChildren> = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false)

	const openModal = () => {
		console.log('open modal')
		setIsOpen(true)
	}
	const closeModal = () => setIsOpen(false)

	return (
		<ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
			<SettingsModal closeModal={closeModal} />
			{children}
		</ModalContext.Provider>
	)
}
