import '@fortawesome/fontawesome-svg-core/styles.css';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { Rosario } from 'next/font/google';

import Content from '../components/containers/Content';
import Header from '../components/containers/Header';
import MainLayout from '../components/layout/MainLayout';
import PageLayout from '../components/layout/PageLayout';
import SEO from '../components/SEO';
import DesktopSidebar from '../components/sidebar/DesktopSidebar';
import MobileSidebar from '../components/sidebar/MobileSidebar';
import '../styles/globals.css';

const rosario = Rosario({
	subsets: ['latin'],
	weight: ['300', '400', '700'],
});

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<main className={rosario.className}>
			<ThemeProvider enableSystem={true} attribute="class">
				<PageLayout>
					<SEO />
					<DesktopSidebar />
					<MainLayout>
						<Header />
						<MobileSidebar />
						<Content>
							<Component {...pageProps} />
						</Content>
					</MainLayout>
				</PageLayout>
			</ThemeProvider>
		</main>
	);
}

export default MyApp;
