import cn from 'classnames'
import { ReactNode } from 'react'

import styles from './Tag.module.css'

interface TagProps {
	appearance: 'small' | 'normal'
	color?: 'ghost' | 'red' | 'gray' | 'green' | 'primary'
	href?: string
	classname?: string
	children: ReactNode
}

export function Tag({
	appearance,
	color,
	href,
	classname,
	children,
	...props
}: TagProps) {
	return (
		<div
			className={cn(styles.tag, classname, {
				[styles.small]: appearance === 'small',
				[styles.normal]: appearance === 'normal',
				[styles.ghost]: color === 'ghost',
				[styles.red]: color === 'red',
				[styles.gray]: color === 'gray',
				[styles.green]: color === 'green',
				[styles.primary]: color === 'primary',
			})}
			{...props}
		>
			{href ? <a href={href}>{children}</a> : <>{children}</>}
		</div>
	)
}
