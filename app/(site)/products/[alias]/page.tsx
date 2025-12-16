import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getPage } from '@/lib/page'

export const metadata: Metadata = {
	title: 'Страница продукта',
}

export default async function Product({
	params,
}: {
	params: Promise<{ alias: string }>
}) {
	const page = await getPage((await params).alias)
	if (!page) notFound()
	return <div>Страница с {page.title}</div>
}
