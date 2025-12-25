import { ReactNode } from 'react'
import cn from 'classnames'

import styles from './Card.module.css'

interface CardProps {
	appearance?: 'white' | 'blue'
	children: ReactNode
	className?: string
}

export function Card({ appearance = 'white', children, className }: CardProps) {
	return (
		<div
			className={cn(className, styles.card, {
				[styles.blue]: appearance === 'blue',
			})}
		>
			{children}
		</div>
	)
}
