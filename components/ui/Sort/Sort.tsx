'use client'

import cn from 'classnames'

import styles from './Sort.module.css'
import SortIcon from './sort.svg'

export enum SortEnum {
	Rating,
	Price,
}

interface SortProps {
	sort: SortEnum
	setSort: (sort: SortEnum) => void
	className?: string
}

export function Sort({ sort, setSort, className }: SortProps) {
	return (
		<div className={cn(className, styles.sort)}>
			<div
				onClick={() => setSort(SortEnum.Rating)}
				className={cn({
					[styles.active]: sort == SortEnum.Rating,
				})}
			>
				<SortIcon className={styles.sortIcon} />
				<span>По рейтингу</span>
			</div>
			<div
				onClick={() => setSort(SortEnum.Price)}
				className={cn({
					[styles.active]: sort == SortEnum.Price,
				})}
			>
				<SortIcon className={styles.sortIcon} />
				<span>По цене</span>
			</div>
		</div>
	)
}
