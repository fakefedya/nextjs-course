import { Menu } from '../Menu/Menu'

interface SidebarProps {
	className?: string
}

export function Sidebar({ ...props }: SidebarProps) {
	return (
		<div {...props}>
			<h1>Sidebar</h1>
			<Menu />
		</div>
	)
}
