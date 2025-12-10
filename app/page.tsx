import { Metadata } from 'next'

import { Heading } from '@/components/Heading/Heading'
import { Button } from '@/components/Button/Button'
import { Paragraph } from '@/components/Paragraph/Paragraph'
import { Tag } from '@/components/Tag/Tag'

export const metadata: Metadata = {
	title: 'Блог – Домашняя страница',
	description: 'Блок про что-то, описание блога',
}

export default function Home() {
	return (
		<>
			<Heading>Это заголовок</Heading>
			<Button appearance='primary'>Кнопка</Button>
			<Button appearance='ghost'>Кнопка</Button>
			<Paragraph>Привет</Paragraph>
			<Paragraph classname='test' appearance='big'>
				Привет Big
			</Paragraph>
			<Tag appearance='small' color='red' href='/'>
				Ссылка
			</Tag>
			<Tag appearance='normal' color='ghost'>
				Гост
			</Tag>
		</>
	)
}
