import { ButtonHTMLAttributes, FC } from 'react'
import clsx from 'clsx'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	size: 'sm' | 'md' | 'lg'
	variant: 'primary' | 'secondary' | 'transparent'
}

export const Button: FC<ButtonProps> = ({ size, variant, children, ...props }) => {
	return (
		<button
			type='button'
			className={clsx(
				'text-blue-900 dark:text-blue-50 dark:[&>svg_path]:stroke-blue-50 dark:[&>svg_path]:fill-blue-50 transition-colors',
				{
					'rounded-sm p-2': size === 'sm',
					'rounded-md p-4 xs:p-6': size === 'md',
					'rounded-lg px-10 py-6 xs:px-12 xs:py-8': size === 'lg',
					'bg-blue-a-600 hover:bg-blue-a-700 active:bg-blue-a-800': variant === 'primary',
					'bg-blue-a-100 hover:bg-blue-a-200 active:bg-blue-a-300': variant === 'secondary',
					'bg-transparent': variant === 'transparent',
				}
			)}
			{...props}
		>
			{children}
		</button>
	)
}
