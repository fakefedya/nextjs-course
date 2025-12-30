import { InputHTMLAttributes } from 'react'
import cn from 'classnames'

import styles from './Input.module.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	isValid?: boolean
}

export function Input({ className, ...props }: InputProps) {
	return <input className={cn(className, styles.input)} {...props} />
}
