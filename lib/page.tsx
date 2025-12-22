import { TopPageModel } from '@/interfaces/page.interface'

import { API } from './api'

export async function getPage(alias: string): Promise<TopPageModel | null> {
	await new Promise((res) => setTimeout(res, 1000))

	const res = await fetch(API.topPage.byAlias + alias, {
		next: { revalidate: 10 },
	})
	if (!res.ok) return null
	return res.json()
}
