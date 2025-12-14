import { ReactNode } from 'react'

interface AboutTemplateProps {
	children: ReactNode
}

const AboutTemplate: React.FC<AboutTemplateProps> = ({ children }) => {
	return <div style={{ border: '1px solid red' }}>{children}</div>
}

export default AboutTemplate
