import { ReactNode } from 'react'

interface AboutTemplateProps {
	children: ReactNode
}

export default function AboutTemplate({ children }: AboutTemplateProps) {
	return <div style={{ border: '1px solid red' }}>{children}</div>
}
