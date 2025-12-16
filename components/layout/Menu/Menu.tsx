import { getMenu } from '@/lib/menu'

export async function Menu() {
	const menu = await getMenu(0)

	return (
		<div>
			<ul>
				{menu.map((el) => (
					<li key={el._id.secondCategory}>{el._id.secondCategory}</li>
				))}
			</ul>
		</div>
	)
}
