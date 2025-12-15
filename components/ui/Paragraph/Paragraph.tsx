import cn from 'classnames'
import { ReactNode } from 'react'

import styles from './Paragraph.module.css'

interface ParagraphProps {
	appearance?: 'small' | 'normal' | 'big'
	classname?: string
	children: ReactNode
}

export function Paragraph({
	appearance = 'normal',
	children,
	classname,
	...props
}: ParagraphProps) {
	return (
		<p
			className={cn(styles.paragraph, classname, {
				[styles.small]: appearance === 'small',
				[styles.normal]: appearance === 'normal',
				[styles.big]: appearance === 'big',
			})}
			{...props}
		>
			{children}
		</p>
	)
}
