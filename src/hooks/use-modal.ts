import { useContext } from 'react'
import { ModalContext } from '../context/modal'

export const useModal = () => {
	return useContext(ModalContext)
}
