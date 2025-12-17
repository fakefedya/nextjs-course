import cn from 'classnames'

import { FirstLevelMenuItem } from '@/interfaces/menu.interface'
import { TopLevelCategory } from '@/interfaces/page.interface'
import { getMenu } from '@/lib/menu'

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
			<>
				{firstLevelMenu.map((menuItem) => (
					<div key={menuItem.route}>
						<a href={`/${menuItem.route}`}>
							<div
								className={cn(styles.firstMenuItem, {
									[styles.firstLevelItemActive]: menuItem.id === firstCategory,
								})}
							>
								{menuItem.icon}
								<span className={styles.menuItemName}>{menuItem.name}</span>
							</div>
						</a>
						{menuItem.id === firstCategory && renderSecondLevel()}
					</div>
				))}
			</>
		)
	}

	const renderSecondLevel = () => {
		return (
			<div className=''>
				{menu.map((menuItem) => (
					<div key={menuItem._id.secondCategory}>
						<div className={styles.secondMenuItem}>
							{menuItem._id.secondCategory}
						</div>
						<div
							className={cn(styles.secondMenuItemTest, {
								[styles.secondLevelItemOpened]: menuItem.isOpened,
							})}
						>
							{renderThirdLevel()}
						</div>
					</div>
				))}
			</div>
		)
	}

	const renderThirdLevel = () => {
		return <> </>
	}

	return <div className={styles.menu}>{renderFirstLevel()}</div>
}
