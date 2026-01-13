import { Search } from '@/components/ui/Search/Search'

import { Menu } from '../Menu/Menu'

import Logo from './logo.svg'
import styles from './Sidebar.module.css'

interface SidebarProps {
	className?: string
}

export function Sidebar({ ...props }: SidebarProps) {
	return (
		<div {...props}>
			<div className={styles.wrapper}>
				<Logo className={styles.logo} />
				<Search />
				<Menu />
			</div>
		</div>
	)
}
