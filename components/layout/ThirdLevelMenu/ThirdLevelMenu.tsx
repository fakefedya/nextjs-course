'use client'

import Link from 'next/link'
import cn from 'classnames'

import { PageItem } from '@/interfaces/menu.interface'
import useAppPathname from '@/hooks/usePathname'

import styles from './ThirdLevelMenu.module.css'

interface ThirdLevelMenuProps {
	pages: PageItem[]
	route: string
}

export function ThirdLevelMenu({ pages, route }: ThirdLevelMenuProps) {
	const path = useAppPathname()

	return (
		<div className={styles.thirdLevelWrapper}>
			{pages.map((p) => (
				<Link
					href={`/${route}/${p.alias}`}
					key={p._id}
					className={cn(styles.thirdMenuItem, {
						[styles.thirdLevelItemActive]: `/${route}/${p.alias}` === path,
					})}
				>
					{p.category}
				</Link>
			))}
		</div>
	)
}
