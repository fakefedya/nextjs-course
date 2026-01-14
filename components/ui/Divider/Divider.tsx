import cn from 'classnames'

import styles from './Divider.module.css'

interface DividerProps {
	className?: string
}

export function Divider({ className }: DividerProps) {
	return <hr className={cn(className, styles.hr)} />
}
