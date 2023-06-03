import { a, useSpringRef, useTransition } from '@react-spring/web'
import { FC, useEffect } from 'react'

// TODO: Find out how to get rid of duplications, there must be something I haven't found yet
export const AnimatedDigits: FC<{ d1: string | number; d2: string | number }> = ({ d1, d2 }) => {
	const transRef = useSpringRef()
	const transition = useTransition(d1, {
		ref: transRef,
		from: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
		enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
		leave: { opacity: 0 },
	})

	const transRef2 = useSpringRef()
	const transition2 = useTransition(d2, {
		ref: transRef,
		from: { opacity: 0, transform: 'translate3d(50%,0,0)' },
		enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
		leave: { opacity: 0 },
	})

	useEffect(() => {
		transRef.start()
		transRef2.start()
	}, [d1, d2, transRef, transRef2])

	return (
		<div className='relative w-[289px] h-[217px]'>
			{transition((style, elem) => (
				<a.div
					style={style}
					className='absolute h-full flex place-content-center will-change-[transform,opacity]'
				>
					{elem}
				</a.div>
			))}
			{transition2((style, elem) => (
				<a.div
					style={style}
					className='absolute right-0 h-full flex place-content-center will-change-[transform,opacity]'
				>
					{elem}
				</a.div>
			))}
		</div>
	)
}
