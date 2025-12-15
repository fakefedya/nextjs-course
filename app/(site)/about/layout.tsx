import { ReactNode } from 'react'

interface AboutLayoutProps {
	children: ReactNode
}

export default function AboutLayout({ children }: AboutLayoutProps) {
	return (
		<div style={{ border: '1px solid red' }}>
			<h1>Это лэйаут от О нас</h1>
			{children}
		</div>
	)
}
