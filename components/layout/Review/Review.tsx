import cn from 'classnames'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'

import { ReviewModel } from '@/interfaces/product.interface'
import { Rating } from '@/components/ui/Rating/Rating'

import UserIcon from './user-icon.svg'
import styles from './Review.module.css'

interface ReviewProps {
	review: ReviewModel
	className?: string
}

export function Review({ className, review }: ReviewProps) {
	const { name, title, description, createdAt, rating } = review

	return (
		<div className={cn(className, styles.review)}>
			<UserIcon className={styles.userIcon} />
			<div className={styles.header}>
				<span className={styles.name}>{name}:</span>
				<span className={styles.title}>{title}</span>
			</div>
			<div className={styles.date}>
				{format(new Date(createdAt), 'dd MMMM yyyy', { locale: ru })}
			</div>
			<div className={styles.rating}>
				<Rating isEditable={false} rating={rating} />
			</div>
			<div className={styles.description}>{description}</div>
		</div>
	)
}
