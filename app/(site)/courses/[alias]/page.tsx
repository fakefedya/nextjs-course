import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getPage } from '@/lib/page'
import { getMenu } from '@/lib/menu'

export const metadata: Metadata = {
	title: 'Страница продукта',
}

export async function generateStaticParams() {
	const menu = await getMenu(0)
	return menu.flatMap((item) =>
		item.pages.map((page) => ({
			alias: page.alias,
		})),
	)
}

export default async function Product({
	params,
}: {
	params: Promise<{ alias: string }>
}) {
	const page = await getPage((await params).alias)
	// if (!page) notFound()
	return <div>Страница с {page.title}</div>
}
