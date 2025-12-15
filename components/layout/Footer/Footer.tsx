interface FooterProps {
	classname?: string
}

export function Footer({ ...props }: FooterProps) {
	return (
		<footer {...props}>
			<h1>Footer</h1>
		</footer>
	)
}
