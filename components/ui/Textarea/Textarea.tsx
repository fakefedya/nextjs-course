import { ComponentPropsWithRef } from 'react'
import cn from 'classnames'
import { FieldError } from 'react-hook-form'

import styles from './Textarea.module.css'

type TextareaProps = ComponentPropsWithRef<'textarea'> & {
	isValid?: boolean
	error?: FieldError
}

export function Textarea({ className, error, ...props }: TextareaProps) {
	return (
		<div className={styles.textareaWrapper}>
			<textarea
				className={cn(className, styles.textarea, {
					[styles.error]: error,
				})}
				{...props}
			/>
			{error && <span>{error.message}</span>}
		</div>
	)
}
