import Image from 'next/image'

import { Card } from '@/components/ui/Card/Card'
import { ProductModel } from '@/interfaces/product.interface'
import { Rating } from '@/components/ui/Rating/Rating'
import { Tag } from '@/components/ui/Tag/Tag'
import { Button } from '@/components/ui/Button/Button'
import { formatRub } from '@/utiles/formatRub'
import { declineNounWithNum } from '@/utiles/declineNounWithNum'
import { Divider } from '@/components/ui/Divider/Divider'

import styles from './Product.module.css'

interface ProductProps {
	product: ProductModel
	className?: string
}

export function Product({ className, product, ...props }: ProductProps) {
	return (
		<Card className={styles.product} {...props}>
			<div className={styles.logo}>
				<Image width={70} height={70} src={product.image} alt={product.title} />
			</div>
			<div className={styles.title}>{product.title}</div>
			<div className={styles.price}>
				{formatRub(product.price)}
				{product.oldPrice && (
					<Tag classname={styles.oldPrice} appearance='small' color='green'>
						{formatRub(product.price - product.oldPrice)}
					</Tag>
				)}
			</div>
			<div className={styles.credit}>
				{formatRub(product.credit)}/<span>мес</span>
			</div>
			<div className={styles.rating}>
				<Rating
					rating={product.reviewAvg ?? product.initialRating}
					isEditable={false}
				/>
			</div>
			<div className={styles.tags}>
				{product.categories.map((c) => (
					<Tag
						classname={styles.categories}
						color='ghost'
						key={c}
						appearance={'small'}
					>
						{c}
					</Tag>
				))}
			</div>
			<div className={styles.priceTitle}>Цена</div>
			<div className={styles.creditTitle}>Кредит</div>
			<div className={styles.rateTitle}>
				{declineNounWithNum(product.reviewCount, [
					'отзыв',
					'отзыва',
					'отзывов',
				])}
			</div>
			<Divider className={styles.hr} />
			<div className={styles.description}>{product.description}</div>
			<div className={styles.feature}>Фичи</div>
			<div className={styles.advBlock}>
				{product.advantages && (
					<div className={styles.advantages}>
						<span>Преимущества</span>
						{product.advantages}
					</div>
				)}
				{product.disadvantages && (
					<div className={styles.disadvantages}>
						<span>Недостатки</span>
						{product.disadvantages}
					</div>
				)}
			</div>
			<Divider className={styles.hr} />
			<div className={styles.actions}>
				<Button appearance={'primary'}>Узнать подробнее</Button>
				<Button appearance={'ghost'} arrow={'right'}>
					Читать отзывы
				</Button>
			</div>
		</Card>
	)
}
