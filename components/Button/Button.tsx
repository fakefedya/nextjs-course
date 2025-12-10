import { ButtonHTMLAttributes, ReactNode } from 'react'
import cn from 'classnames'

import styles from './Button.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	appearance: 'primary' | 'ghost'
	children: ReactNode
}

export const Button: React.FC<ButtonProps> = ({
	appearance,
	children,
	...props
}) => {
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
