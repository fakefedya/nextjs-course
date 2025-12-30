import { Metadata } from 'next'

import { getMenu } from '@/lib/menu'
import { Menu } from '@/components/layout/Menu/Menu'
import { Input } from '@/components/ui/Input/Input'
import { Textarea } from '@/components/ui/Textarea/Textarea'

// import { Heading } from '@/components/ui/Heading/Heading'
// import { Button } from '@/components/ui/Button/Button'
// import { Paragraph } from '@/components/ui/Paragraph/Paragraph'
// import { Tag } from '@/components/ui/Tag/Tag'
// import { Rating } from '@/components/ui/Rating/Rating'

export const metadata: Metadata = {
	title: 'Блог – Домашняя страница',
	description: 'Блок про что-то, описание блога',
}

export default async function Home() {
	return (
		<div>
			<h1>Главная страница</h1>
			<Input placeholder='123' />
			<Textarea placeholder='312' />
		</div>
	)
}
