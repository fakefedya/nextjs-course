import { ButtonHTMLAttributes, ReactNode } from 'react'
import cn from 'classnames'

import styles from './Button.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	appearance: 'primary' | 'ghost'
	arrow?: 'right' | 'left'
	children: ReactNode
}

export function Button({ appearance, children, ...props }: ButtonProps) {
	return (
		<button
			className={cn(styles.button, {
				[styles.primary]: appearance === 'primary',
				[styles.ghost]: appearance === 'ghost',
			})}
			{...props}
		>
			{children}
		</button>
	)
}
