'use client'

import { HTMLAttributes, useState, type JSX, type KeyboardEvent } from 'react'
import cn from 'classnames'

import styles from './Rating.module.css'
import RatingIcon from './rating.svg'

const RATING_ARRAY = new Array(5).fill(null)

interface RatingProps extends HTMLAttributes<HTMLDivElement> {
	isEditable: boolean
	rating: number
	setRating?: (i: number) => void
}

const Rating: React.FC<RatingProps> = ({
	isEditable = false,
	rating,
	setRating,
	className,
	...props
}): JSX.Element => {
	const [hoverRating, setHoverRating] = useState<number | null>(null)

	const displayRating = hoverRating ?? rating

	const handleClick = (i: number): void => {
		if (!isEditable || !setRating) {
			return
		}
		setRating(i)
	}

	const handleSpace = (i: number, e: KeyboardEvent<SVGElement>): void => {
		if (e.code != 'Space' || !setRating) {
			return
		}
		handleClick(i)
	}

	return (
		<div className={cn(className)} {...props}>
			{RATING_ARRAY.map((_, i) => (
				<span
					key={i}
					onMouseEnter={() => isEditable && setHoverRating(i + 1)}
					onMouseLeave={() => isEditable && setHoverRating(null)}
					onClick={() => handleClick(i + 1)}
				>
					<RatingIcon
						className={cn(styles.star, {
							[styles.filled]: i < displayRating,
							[styles.isEditable]: isEditable,
						})}
						tabIndex={isEditable ? 0 : -1}
						onKeyDown={(e: KeyboardEvent<SVGElement>) =>
							isEditable && handleSpace(i + 1, e)
						}
					/>
				</span>
			))}
		</div>
	)
}

export { Rating }
