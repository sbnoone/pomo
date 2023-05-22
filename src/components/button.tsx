import { ButtonHTMLAttributes, FC } from 'react'
import clsx from 'clsx'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	size: 'sm' | 'md' | 'lg'
	variant: 'primary' | 'secondary'
}

export const Button: FC<ButtonProps> = ({ size, variant, children, ...props }) => {
	return (
		<button
			type='button'
			className={clsx(
				'text-blue-900 dark:text-blue-50 dark:[&>svg_path]:stroke-blue-50 dark:[&>svg_path]:fill-blue-50',
				{
					'rounded-sm p-2': size === 'sm',
					'rounded-md p-6': size === 'md',
					'rounded-lg px-12 py-8': size === 'lg',
					'bg-blue-600': variant === 'primary',
					'bg-blue-100': variant === 'secondary',
				}
			)}
			{...props}
		>
			{children}
		</button>
	)
}
