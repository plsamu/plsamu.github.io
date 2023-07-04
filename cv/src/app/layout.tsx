import '../css/globals.css'
import '../css/layout.css'
import '../css/text.css'
import '../css/components.css'
import ThemeProvider from './theme-provider'

export const metadata = {
	title: 'CV',
	description: '',
}

export default function RootLayout({ children }: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>
				<ThemeProvider>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
