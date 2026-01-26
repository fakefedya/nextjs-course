'use client'

import Link from 'next/link'
import cn from 'classnames'
import { motion } from 'framer-motion'

import { PageItem } from '@/interfaces/menu.interface'
import useAppPathname from '@/hooks/usePathname'

import styles from './ThirdLevelMenu.module.css'

interface ThirdLevelMenuProps {
	pages: PageItem[]
	route: string
	isSecondOpened: boolean
}

export function ThirdLevelMenu({
	isSecondOpened,
	pages,
	route,
}: ThirdLevelMenuProps) {
	const path = useAppPathname()

	const variants = {
		visible: {
			opacity: 1,
			height: 29,
		},
		hidden: {
			opacity: 0,
			height: 0,
		},
	}

	return (
		<div className={styles.thirdLevelWrapper}>
			{pages.map((p) => (
				<motion.div
					variants={variants}
					animate={isSecondOpened ? 'visible' : 'hidden'}
					key={p._id}
				>
					<Link
						href={`/${route}/${p.alias}`}
						className={cn(styles.thirdMenuItem, {
							[styles.thirdLevelItemActive]: `/${route}/${p.alias}` === path,
						})}
					>
						{p.category}
					</Link>
				</motion.div>
			))}
		</div>
	)
}
