import { ReactNode } from 'react'

import styles from './Heading.module.css'

interface HeadingProps {
	tag?: 'h1' | 'h2' | 'h3'
	children: ReactNode
}

export const Heading: React.FC<HeadingProps> = ({ tag = 'h1', children }) => {
	switch (tag) {
		case 'h1':
			return <h1 className={styles.h1}>{children}</h1>
		case 'h2':
			return <h2>{children}</h2>
		case 'h3':
			return <h3>{children}</h3>
		default:
			return <></>
	}
}
