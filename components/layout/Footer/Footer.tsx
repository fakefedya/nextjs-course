import styles from './Footer.module.css'

interface FooterProps {
	className?: string
}

export function Footer({ ...props }: FooterProps) {
	return (
		<footer {...props}>
			<div className={styles.footerWrapper}>
				<div className={styles.rights}>
					OwlTop &copy; 2020 - {new Date().getFullYear()} Все права защищены
				</div>
				<div className={styles.links}>
					<a href='/' target='_blank'>
						Пользовательское соглашение
					</a>
					<a href='/' target='_blank'>
						Политика конфиденциальности
					</a>
				</div>
			</div>
		</footer>
	)
}
