import { ComponentPropsWithRef } from 'react'
import cn from 'classnames'
import { FieldError } from 'react-hook-form'

import styles from './Input.module.css'

type InputProps = ComponentPropsWithRef<'input'> & {
	isValid?: boolean
	error?: FieldError
}

export function Input({ className, error, ...props }: InputProps) {
	return (
		<div className={styles.inputWrapper}>
			<input
				className={cn(className, styles.input, {
					[styles.error]: error,
				})}
				{...props}
			/>
			{error && <span>{error.message}</span>}
		</div>
	)
}
