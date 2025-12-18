import { Menu } from '../Menu/Menu'

interface SidebarProps {
	className?: string
}

export function Sidebar({ ...props }: SidebarProps) {
	return (
		<div {...props}>
			<Menu />
		</div>
	)
}
