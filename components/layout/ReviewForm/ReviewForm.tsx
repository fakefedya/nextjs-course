'use client'

import cn from 'classnames'
import { useForm, Controller } from 'react-hook-form'

import { Input } from '@/components/ui/Input/Input'
import { Rating } from '@/components/ui/Rating/Rating'
import { Textarea } from '@/components/ui/Textarea/Textarea'
import { Button } from '@/components/ui/Button/Button'

import CloseIcon from './close.svg'
import styles from './ReviewForm.module.css'

interface ReviewFormProps {
	productId: string
	className?: string
}

interface ReviewFormHookProps {
	name: string
	title: string
	description: string
	rating: number
}

export function ReviewForm({ productId, className }: ReviewFormProps) {
	const { register, control, handleSubmit } = useForm<ReviewFormHookProps>()

	const onSubmit = (data: ReviewFormHookProps) => {
		console.log(data)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={cn(className, styles.reviewForm)}>
				<Input {...register('name')} placeholder='Имя' />
				<Input
					{...register('title')}
					placeholder='Заголовок отзыва'
					className={styles.title}
				/>
				<div className={styles.rating}>
					<span>Оценка:</span>
					<Controller
						control={control}
						name='rating'
						render={({ field }) => (
							<Rating
								isEditable
								rating={field.value}
								ref={field.ref}
								setRating={field.onChange}
							/>
						)}
					/>
				</div>
				<Textarea
					{...register('description')}
					placeholder='Текст отзыва'
					className={styles.description}
				/>
				<div className={styles.submit}>
					<Button appearance={'primary'}>Отправить</Button>
					<span>
						* Перед публикацией отзыв пройдет предварительную модерацию и
						проверку
					</span>
				</div>
			</div>
			<div className={styles.success}>
				<div className={styles.successTitle}>Ваш отзыв отправлен</div>
				<div>Спасибо, ваш отзыв будет опубликован после проверки.</div>
				<CloseIcon className={styles.close} />
			</div>
		</form>
	)
}
