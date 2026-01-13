'use client'

import cn from 'classnames'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

import { Input } from '../Input/Input'
import { Button } from '../Button/Button'

import SearchIcon from './search-icon.svg'
import styles from './Search.module.css'

interface SearchProps {
	className?: string
}

export function Search({ className, ...props }: SearchProps) {
	const [search, setSearch] = useState<string>('')
	const router = useRouter()

	const goToSearch = () => {
		router.push(`/search?q=${search}`)
	}

	const handleKewDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			goToSearch()
		}
	}

	return (
		<div className={cn(className, styles.search)} {...props}>
			<Input
				placeholder='Поиск...'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				className={styles.input}
				onKeyDown={handleKewDown}
			/>
			<Button
				appearance='primary'
				className={styles.button}
				onClick={goToSearch}
			>
				<SearchIcon />
			</Button>
		</div>
	)
}
