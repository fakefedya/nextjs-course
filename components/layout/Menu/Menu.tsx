import { TopLevelCategory } from '@/interfaces/page.interface'
import { getMenu } from '@/lib/menu'

export async function Menu() {
	const firstCategory = TopLevelCategory.Products
	console.log(firstCategory)
	const menu = await getMenu(firstCategory)

	console.log(menu)

	return (
		<div>
			<ul>
				{menu.map((el) => (
					<li key={el._id.secondCategory}>
						{el._id.secondCategory}
						{el.pages.map((page) => (
							<span>{page.category}</span>
						))}
					</li>
				))}
			</ul>
		</div>
	)
}
