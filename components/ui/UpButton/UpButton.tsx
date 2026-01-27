'use client'

import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

import { useScrollY } from '@/hooks/useScrollY'

import styles from './UpButton.module.css'
import UpIcon from './up.svg'

export function Up() {
	const controls = useAnimation()
	const y = useScrollY()

	useEffect(() => {
		controls.start({ opacity: y / document.body.scrollHeight })
	}, [y, controls])

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	return (
		<motion.button
			className={styles.up}
			onClick={scrollToTop}
			animate={controls}
			initial={{ opacity: 0 }}
		>
			<UpIcon />
		</motion.button>
	)
}
