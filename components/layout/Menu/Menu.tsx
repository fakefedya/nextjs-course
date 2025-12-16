import { getMenu } from '@/lib/menu'

export async function Menu() {
	const menu = await getMenu(0)

	return <div>{JSON.stringify(menu)}</div>
}
