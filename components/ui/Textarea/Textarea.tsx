import { TextareaHTMLAttributes } from 'react'
import cn from 'classnames'

import styles from './Textarea.module.css'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	isValid?: boolean
}

export function Textarea({ className, ...props }: TextareaProps) {
	return <textarea className={cn(className, styles.input)} {...props} />
}
