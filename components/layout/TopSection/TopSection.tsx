'use client'

import { Heading } from '@/components/ui/Heading/Heading'
import { TopPageModel } from '@/interfaces/page.interface'
import { ProductModel } from '@/interfaces/product.interface'
import { Tag } from '@/components/ui/Tag/Tag'
import { HhData } from '@/components/ui/HhData/HhData'
import { Advantages } from '@/components/ui/Advantages/Advantages'
import { Paragraph } from '@/components/ui/Paragraph/Paragraph'
import { Sort, SortEnum } from '@/components/ui/Sort/Sort'

import styles from './TopSection.module.css'

export interface TopSectionProps {
	page: TopPageModel
	products: ProductModel[]
}

export function TopSection({ page, products }: TopSectionProps) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>
				<Heading>{page.title}</Heading>
				{products && (
					<Tag color='gray' appearance='normal'>
						{products.length}
					</Tag>
				)}
				<Sort sort={SortEnum.Price} setSort={() => {}} />
			</div>
			<div>
				{products &&
					products.map((product) => (
						<div key={product._id}>{product.title}</div>
					))}
			</div>
			<div className={styles.title}>
				<Heading tag='h2'>Вакансии — {page.category}</Heading>
				<Tag color='red' appearance='normal'>
					hh.ru
				</Tag>
			</div>
			<div className={styles.vacancies}>
				{page.hh && (
					<HhData
						count={page.hh.count}
						juniorSalary={page.hh.juniorSalary}
						middleSalary={page.hh.middleSalary}
						seniorSalary={page.hh.seniorSalary}
					/>
				)}
				{page.advantages && page.advantages.length > 0 && (
					<div>
						<Heading tag='h2'>Преимущества</Heading>
						<Advantages advantages={page.advantages} />
					</div>
				)}
				{page.seoText && (
					<div
						className={styles.seoText}
						dangerouslySetInnerHTML={{ __html: page.seoText }}
					/>
				)}
				<div>
					<Heading tag='h2'>Получаемые навыки</Heading>
					<div className={styles.tagWrapper}>
						{page.tags.map((t) => (
							<Tag key={t} appearance='normal' color='primary'>
								{t}
							</Tag>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
