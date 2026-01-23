import { ComponentPropsWithRef } from 'react'
import cn from 'classnames'

import styles from './Textarea.module.css'

type TextareaProps = ComponentPropsWithRef<'textarea'> & {
	isValid?: boolean
}

export function Textarea({ className, ...props }: TextareaProps) {
	return <textarea className={cn(className, styles.input)} {...props} />
}
