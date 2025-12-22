'use client'

import cn from 'classnames'
import { useState } from 'react'

import type { FirstLevelMenuItem, MenuItem } from '@/interfaces/menu.interface'
import useAppPathname from '@/hooks/usePathname'

import { ThirdLevelMenu } from '../ThirdLevelMenu/ThirdLevelMenu'

import styles from './SecondLevelMenu.module.css'

interface SecondLevelMenuProps {
	menu: MenuItem[]
	menuItem: FirstLevelMenuItem
}

export function SecondLevelMenu({ menu, menuItem }: SecondLevelMenuProps) {
	const path = useAppPathname()
	const activeAlias = path.split('/')[2]

	const [items, setItems] = useState<MenuItem[]>(() =>
		menu.map((m) => ({
			...m,
			isOpened: m.pages.some((p) => p.alias === activeAlias),
		})),
	)

	const openSecondLevel = (secondCategory: string) => {
		setItems((prev) => {
			const current = prev.find((m) => m._id.secondCategory === secondCategory)
			const willOpen = !(current?.isOpened ?? false)

			return prev.map(
				(m) =>
					m._id.secondCategory === secondCategory
						? { ...m, isOpened: willOpen } // открываем/закрываем выбранный
						: { ...m, isOpened: false }, // остальные закрываем
			)
		})
	}

	return (
		<div className={styles.secondLevelWrapper}>
			{items.map((menuItemSecond) => (
				<div
					key={menuItemSecond._id.secondCategory}
					className={styles.secondLevelModule}
				>
					<div
						onClick={() => openSecondLevel(menuItemSecond._id.secondCategory)}
						className={styles.secondMenuItem}
					>
						{menuItemSecond._id.secondCategory}
					</div>

					<div
						className={cn(styles.secondLevelBlock, {
							[styles.secondLevelBlockOpened]: menuItemSecond.isOpened,
						})}
					>
						<ThirdLevelMenu
							pages={menuItemSecond.pages}
							route={menuItem.route}
						/>
					</div>
				</div>
			))}
		</div>
	)
}
