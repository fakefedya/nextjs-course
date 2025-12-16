import { MenuItem } from '@/interfaces/menu.interface'

import { API } from './api'

export async function getMenu(firstCategory: number): Promise<MenuItem[]> {
	const res = await fetch(API.topPage.find, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ firstCategory }),
		next: { revalidate: 10 },
	})
	return res.json()
}
