interface SidebarProps {
	classname?: string
}

export function Sidebar({ ...props }: SidebarProps) {
	return (
		<div {...props}>
			<h1>Sidebar</h1>
		</div>
	)
}
