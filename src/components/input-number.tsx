import { ChangeEventHandler, FC, InputHTMLAttributes } from 'react'
import { ReactComponent as TriangleSvg } from '../assets/icons/ph_triangle.svg'
import { MAX_TIME_IN_SECONDS, MIN_TIME_IN_SECONDS } from '../app-constants'

interface InputNumberProps extends InputHTMLAttributes<HTMLInputElement> {
	value: number
	handleChange: (value: number) => void
}

export const InputNumber: FC<InputNumberProps> = ({ value, handleChange, ...props }) => {
	const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		const { value } = e.target
		const num = parseInt(value, 10)

		if (isNaN(num)) {
			handleChange(MIN_TIME_IN_SECONDS)
		} else {
			handleChange(
				num >= MIN_TIME_IN_SECONDS && num < MAX_TIME_IN_SECONDS ? num : MAX_TIME_IN_SECONDS
			)
		}
	}

	const increment = () => {
		handleChange(value < MAX_TIME_IN_SECONDS ? value + 1 : MAX_TIME_IN_SECONDS)
	}

	const decrement = () => {
		handleChange(value > MIN_TIME_IN_SECONDS ? value - 1 : MIN_TIME_IN_SECONDS)
	}

	return (
		<div className='flex border-[1px] h-10 border-black-100 dark:border-white-100 rounded-sm overflow-hidden max-w-[96px] w-full'>
			<input
				{...props}
				value={value.toString()}
				onChange={onChange}
				type='number'
				className='h-10 bg-transparent border-none max-w-[66px] flex-1 text-center outline-none px-1 tracking-[0.15px]'
			/>
			<div className='border-l-[1px] border-l-black-100 dark:border-l-white-100'>
				<button
					onClick={increment}
					type='button'
					className='flex justify-center items-center w-[30px] h-[19px] -outline-offset-2'
				>
					<TriangleSvg className='stroke-blue-900 dark:stroke-blue-50 fill-blue-900  dark:fill-blue-50 [&_path]:fill-blue-900 [&_path]:dark:fill-blue-50' />
				</button>
				<button
					onClick={decrement}
					type='button'
					className='flex justify-center items-center w-[30px] h-[19px] border-t-[1px] border-t-black-100 dark:border-t-white-100 -outline-offset-2'
				>
					<TriangleSvg className='stroke-blue-900 dark:stroke-blue-50 fill-blue-900  dark:fill-blue-50 [&_path]:fill-blue-900 [&_path]:dark:fill-blue-50 rotate-180' />
				</button>
			</div>
		</div>
	)
}
