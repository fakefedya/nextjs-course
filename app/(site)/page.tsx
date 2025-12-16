import { Metadata } from 'next'

import { getMenu } from '@/lib/menu'
import { Menu } from '@/components/layout/Menu/Menu'

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
	// return (
	// 	<>
	// 		<Heading>Это заголовок</Heading>
	// 		<Button appearance='primary'>Кнопка</Button>
	// 		<Button appearance='ghost'>Кнопка</Button>
	// 		<Paragraph>Привет</Paragraph>
	// 		<Paragraph classname='test' appearance='big'>
	// 			Привет Big
	// 		</Paragraph>
	// 		<Tag appearance='small' color='red' href='/'>
	// 			Ссылка
	// 		</Tag>
	// 		<Tag appearance='normal' color='ghost'>
	// 			Гост
	// 		</Tag>
	// 		<Rating isEditable={true} rating={3} />
	// 	</>
	// )

	return (
		<div>
			<h1>Главная страница</h1>
			<div>
				<Menu />
			</div>
		</div>
	)
}
