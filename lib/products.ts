import { ProductModel } from '@/interfaces/product.interface'

import { API } from './api'

export async function getProducts(
	category: string,
): Promise<ProductModel[] | null> {
	const res = await fetch(API.product.find, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ category: category, limit: 10 }),
		next: { revalidate: 10 },
	})
	// if (!res.ok) return null

	return res.json()
}
