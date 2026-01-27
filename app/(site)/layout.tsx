import { Noto_Sans } from 'next/font/google'

import './globals.css'

import { Header } from '@/components/layout/Header/Header'
import { Sidebar } from '@/components/layout/Sidebar/Sidebar'
import { Footer } from '@/components/layout/Footer/Footer'
import { Up } from '@/components/ui/UpButton/UpButton'

import styles from './layout.module.css'

const notoSans = Noto_Sans({
	subsets: ['cyrillic'],
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body className={notoSans.className}>
				<div className={styles.app}>
					<Header className={styles.header} />
					<Sidebar className={styles.sidebar} />
					<main className={styles.main}>{children}</main>
					<Footer className={styles.footer} />
					<Up />
				</div>
			</body>
		</html>
	)
}
