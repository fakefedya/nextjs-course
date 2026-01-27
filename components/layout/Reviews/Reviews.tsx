'use client'

import { useState } from 'react'
import cn from 'classnames'
import { motion } from 'framer-motion'

import { Card } from '@/components/ui/Card/Card'
import { Button } from '@/components/ui/Button/Button'
import { ReviewModel } from '@/interfaces/product.interface'

import { Review } from '../Review/Review'
import { ReviewForm } from '../ReviewForm/ReviewForm'

import styles from './Reviews.module.css'

interface ReviewsProps {
	className?: string
	reviews: ReviewModel[]
	productId: string
}

export function Reviews({ productId, reviews }: ReviewsProps) {
	const [isReviewsOpened, setIsReviewsOpened] = useState<boolean>(false)

	const variants = {
		visible: { opacity: 1, height: 'auto' },
		hidden: { opacity: 0, height: 0 },
	}

	return (
		<>
			<div className={styles.actions}>
				<Button appearance={'primary'}>Узнать подробнее</Button>
				<Button
					appearance={'ghost'}
					arrow={'right'}
					onClick={() => setIsReviewsOpened(!isReviewsOpened)}
				>
					Читать отзывы
				</Button>
			</div>
			<motion.div
				animate={isReviewsOpened ? 'visible' : 'hidden'}
				variants={variants}
				initial='hidden'
			>
				<Card className={cn(styles.reviews)}>
					{reviews.map((r) => (
						<Review key={r._id} review={r} />
					))}
					<ReviewForm productId={productId} />
				</Card>
			</motion.div>
		</>
	)
}
