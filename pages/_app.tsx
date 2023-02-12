import { Montserrat } from '@next/font/google';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';

import '@fortawesome/fontawesome-svg-core/styles.css';
import '../styles/globals.css';

const montserrat = Montserrat({
	subsets: ['latin'],
	weight: ['300', '400', '700'],
});

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<main className={montserrat.className}>
			<ThemeProvider enableSystem={true} attribute="class">
				<Component {...pageProps} />
			</ThemeProvider>
		</main>
	);
}

export default MyApp;
