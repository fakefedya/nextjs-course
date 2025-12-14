import { ReactNode } from 'react'

interface AboutLayoutProps {
	children: ReactNode
}

const AboutLayout: React.FC<AboutLayoutProps> = ({ children }) => {
	return (
		<div style={{ border: '1px solid red' }}>
			<h1>Это лэйаут от О нас</h1>
			{children}
		</div>
	)
}

export default AboutLayout
