'use client'

import cn from 'classnames'
import { useForm, Controller } from 'react-hook-form'
import { useState } from 'react'

import { Input } from '@/components/ui/Input/Input'
import { Rating } from '@/components/ui/Rating/Rating'
import { Textarea } from '@/components/ui/Textarea/Textarea'
import { Button } from '@/components/ui/Button/Button'
import { ReviewFormHookProps } from '@/interfaces/review.interface'
import { postReview } from '@/lib/review'

import CloseIcon from './close.svg'
import styles from './ReviewForm.module.css'

interface ReviewFormProps {
	productId: string
	className?: string
}

export function ReviewForm({ productId, className }: ReviewFormProps) {
	const {
		register,
		control,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<ReviewFormHookProps>()

	const [isSuccess, setIsSuccess] = useState<boolean>(false)
	const [isError, setIsError] = useState<string>()

	const onSubmit = async (formData: ReviewFormHookProps) => {
		try {
			const data = await postReview(productId, { ...formData })
			if (data.message) {
				setIsSuccess(true)
				reset()
			} else {
				setIsError('Что-то пошло не так')
			}
		} catch (e) {
			const message = e instanceof Error ? e.message : 'Unknown error'
			setIsError(message)
		}
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={cn(className, styles.reviewForm)}>
				<Input
					{...register('name', {
						required: { value: true, message: 'Заполните имя' },
					})}
					placeholder='Имя'
					error={errors.name}
				/>
				<Input
					{...register('title', {
						required: { value: true, message: 'Заполните заголовок' },
					})}
					placeholder='Заголовок отзыва'
					className={styles.title}
					error={errors.title}
				/>
				<div className={styles.rating}>
					<span>Оценка:</span>
					<Controller
						control={control}
						name='rating'
						rules={{ required: { value: true, message: 'Укажите рейтинг' } }}
						render={({ field }) => (
							<Rating
								isEditable
								rating={field.value}
								ref={field.ref}
								setRating={field.onChange}
								error={errors.rating}
							/>
						)}
					/>
				</div>
				<Textarea
					{...register('description', {
						required: { value: true, message: 'Заполните текст отзыва' },
					})}
					placeholder='Текст отзыва'
					className={styles.description}
					error={errors.description}
				/>
				<div className={styles.submit}>
					<Button appearance={'primary'}>Отправить</Button>
					<span>
						* Перед публикацией отзыв пройдет предварительную модерацию и
						проверку
					</span>
				</div>
			</div>
			{isSuccess && (
				<div className={styles.success}>
					<div className={styles.successTitle}>Ваш отзыв отправлен</div>
					<div>Спасибо, ваш отзыв будет опубликован после проверки.</div>
					<CloseIcon
						className={styles.close}
						onClick={() => setIsSuccess(false)}
					/>
				</div>
			)}
			{isError && (
				<div className={styles.error}>
					<div className={styles.errorTitle}>Ошибка!</div>
					<div>{isError}</div>
					<CloseIcon
						className={styles.close}
						onClick={() => setIsError(undefined)}
					/>
				</div>
			)}
		</form>
	)
}
