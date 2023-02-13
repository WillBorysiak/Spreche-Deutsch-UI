import type { NextPage } from 'next';

import Content from '../components/containers/Content';
import Header from '../components/containers/Header';
import MainLayout from '../components/layout/MainLayout';
import Sidebar from '../components/containers/Sidebar';
import SEO from '../components/SEO';
import PageLayout from '../components/layout/PageLayout';
import MobileSidebar from '../components/containers/MobileSidebar';

const Home: NextPage = () => {
	return (
		<PageLayout>
			<SEO />
			<Sidebar />
			<MainLayout>
				<Header />
				<MobileSidebar />
				<Content />
			</MainLayout>
		</PageLayout>
	);
};

export default Home;
