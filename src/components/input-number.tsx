import { FC, InputHTMLAttributes } from 'react'
import { ReactComponent as TriangleSvg } from '../assets/icons/ph_triangle.svg'

interface InputNumberProps extends InputHTMLAttributes<HTMLInputElement> {
	test?: string
}

export const InputNumber: FC<InputNumberProps> = ({ ...props }) => {
	return (
		<div className='flex border-[1px] h-10 border-black-100 dark:border-white-100 rounded-sm overflow-hidden '>
			<input
				{...props}
				type='number'
				className='h-10 bg-transparent border-none max-w-[66px] text-center outline-none px-1 tracking-[0.15px]'
			/>
			<div className='border-l-[1px] border-l-black-100 dark:border-l-white-100'>
				<button
					type='button'
					className='flex justify-center items-center w-[30px] h-[19px] -outline-offset-2'
				>
					<TriangleSvg className='stroke-blue-900 dark:stroke-blue-50 fill-blue-900  dark:fill-blue-50 [&_path]:fill-blue-900 [&_path]:dark:fill-blue-50' />
				</button>
				<button
					type='button'
					className='flex justify-center items-center w-[30px] h-[19px] border-t-[1px] border-t-black-100 dark:border-t-white-100 -outline-offset-2'
				>
					<TriangleSvg className='stroke-blue-900 dark:stroke-blue-50 fill-blue-900  dark:fill-blue-50 [&_path]:fill-blue-900 [&_path]:dark:fill-blue-50 rotate-180' />
				</button>
			</div>
		</div>
	)
}
