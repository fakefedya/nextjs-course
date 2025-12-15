import { Noto_Sans } from 'next/font/google'

import './globals.css'
import { Header } from '@/components/layout/Header/Header'
import { Sidebar } from '@/components/layout/Sidebar/Sidebar'
import { Footer } from '@/components/layout/Footer/Footer'

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
				<Header />
				<main>
					<Sidebar />
					{children}
				</main>
				<Footer />
			</body>
		</html>
	)
}
