// import { Noto_Sans } from 'next/font/google'
// import '../globals.css'

// const notoSans = Noto_Sans({
// 	subsets: ['cyrillic'],
// })

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body>
				{children}
				<h1>Авторизация</h1>
			</body>
		</html>
	)
}
