interface HeaderProps {
	className?: string
}

export function Header({ ...props }: HeaderProps) {
	return (
		<header {...props}>
			<h1>Header</h1>
		</header>
	)
}
