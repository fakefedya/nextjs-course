import { ButtonHTMLAttributes, ReactNode } from 'react'
import cn from 'classnames'

import styles from './ButtonIcon.module.css'
import upIcon from './up.svg'
import closeIcon from './close.svg'
import burgerIcon from './burger.svg'

const icons = {
	upIcon,
	closeIcon,
	burgerIcon,
}

type IconName = keyof typeof icons

interface ButtonIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	appearance: 'primary' | 'white'
	icon: IconName
}

export function ButtonIcon({ appearance, icon, ...props }: ButtonIconProps) {
	const IconComponent = icons[icon]
	return (
		<button
			className={cn(styles.button, {
				[styles.primary]: appearance === 'primary',
				[styles.white]: appearance === 'white',
			})}
			{...props}
		>
			<IconComponent />
		</button>
	)
}
