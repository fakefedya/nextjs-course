import { ComponentPropsWithRef } from 'react'
import cn from 'classnames'

import styles from './Input.module.css'

type InputProps = ComponentPropsWithRef<'input'> & {
	isValid?: boolean
}

export function Input({ className, ...props }: InputProps) {
	return <input className={cn(className, styles.input)} {...props} />
}
