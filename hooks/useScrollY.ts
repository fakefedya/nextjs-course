'use client'

import { useEffect, useState } from 'react'

export const useScrollY = (): number => {
	const [scrollY, setScrollY] = useState<number>(0)

	const handleScroll = () => {
		const currentScrollY = window.scrollY
		setScrollY(currentScrollY)
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true })
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return scrollY
}
