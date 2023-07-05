import '../css/globals.css'
import '../css/layout.css'
import '../css/text.css'
import '../css/components.css'
import ThemeProvider from './theme-provider'
import Body from '@/components/body'

export const metadata = {
	title: 'CV',
	description: '',
}

export default function RootLayout({ children }: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<ThemeProvider>
				<Body children={children} />
			</ThemeProvider>
		</html>
	)
}
