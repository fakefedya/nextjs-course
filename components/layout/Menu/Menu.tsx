import cn from 'classnames'
import Link from 'next/link'

import { FirstLevelMenuItem } from '@/interfaces/menu.interface'
import { TopLevelCategory } from '@/interfaces/page.interface'
import { getMenu } from '@/lib/menu'

import { ThirdLevelMenu } from '../ThirdLevelMenu/ThirdLevelMenu'

import CoursesIcon from './icons/courses-icon.svg'
import ServicesIcon from './icons/services-icon.svg'
import BooksIcon from './icons/books-icon.svg'
import ProductsIcon from './icons/products-icon.svg'
import styles from './Menu.module.css'

const firstLevelMenu: FirstLevelMenuItem[] = [
	{
		route: 'courses',
		name: 'Курсы',
		icon: <CoursesIcon />,
		id: TopLevelCategory.Courses,
	},
	{
		route: 'services',
		name: 'Сервисы',
		icon: <ServicesIcon />,
		id: TopLevelCategory.Services,
	},
	{
		route: 'books',
		name: 'Книги',
		icon: <BooksIcon />,
		id: TopLevelCategory.Books,
	},
	{
		route: 'products',
		name: 'Товары',
		icon: <ProductsIcon />,
		id: TopLevelCategory.Products,
	},
]

export async function Menu() {
	const firstCategory = TopLevelCategory.Courses
	const menu = await getMenu(firstCategory)

	const renderFirstLevel = () => {
		return (
			<div className={styles.wrapper}>
				{firstLevelMenu.map((menuItem) => (
					<div key={menuItem.route}>
						<Link
							href={`/${menuItem.route}`}
							className={styles.firstMenuItemLink}
						>
							<div
								className={cn(styles.firstMenuItem, {
									[styles.firstLevelItemActive]: menuItem.id === firstCategory,
								})}
							>
								{menuItem.icon}
								<span className={styles.menuItemName}>{menuItem.name}</span>
							</div>
						</Link>
						{menuItem.id === firstCategory && renderSecondLevel(menuItem)}
					</div>
				))}
			</div>
		)
	}

	const renderSecondLevel = (menuItem: FirstLevelMenuItem) => {
		return (
			<div className={styles.secondLevelWrapper}>
				{menu.map((menuItemSecond) => (
					<div
						key={menuItemSecond._id.secondCategory}
						className={styles.secondLevelBlock}
					>
						<div className={styles.secondMenuItem}>
							{menuItemSecond._id.secondCategory}
						</div>
						<div
							className={cn(styles.secondMenuItemTest, {
								[styles.secondLevelItemOpened]: menuItemSecond.isOpened,
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

	return <div className={styles.menu}>{renderFirstLevel()}</div>
}
