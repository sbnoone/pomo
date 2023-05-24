import { FC, InputHTMLAttributes } from 'react'
import { ReactComponent as TriangleSvg } from '../assets/icons/ph_triangle.svg'

interface InputNumberProps extends InputHTMLAttributes<HTMLInputElement> {
	test?: string
}

export const InputNumber: FC<InputNumberProps> = ({ ...props }) => {
	return (
		<div className='flex border-[1px] h-10 border-black-100 rounded-sm overflow-hidden '>
			<input
				{...props}
				type='number'
				className='h-10 bg-transparent border-none max-w-[66px] text-center outline-none px-1'
			/>
			<div className='border-l-[1px] border-l-black-100'>
				<button
					type='button'
					className='flex justify-center items-center w-[30px] h-[19px] -outline-offset-2'
				>
					<TriangleSvg />
				</button>
				<button
					type='button'
					className='flex justify-center items-center w-[30px] h-[19px] border-t-[1px] border-t-black-100 -outline-offset-2'
				>
					<TriangleSvg className='rotate-180' />
				</button>
			</div>
		</div>
	)
}
