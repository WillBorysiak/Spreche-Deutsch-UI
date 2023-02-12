import type { NextPage } from 'next';
import { useStore } from '../store/store';

import Content from '../components/content/Content';
import Header from '../components/layout/Header';
import Layout from '../components/layout/Layout';
import Sidebar from '../components/layout/Sidebar';
import SEO from '../components/SEO';

const Home: NextPage = () => {
	const { showSidebar, toggleSidebar } = useStore();

	return (
		<>
			<SEO />
			<Header toggleSidebar={toggleSidebar} />
			<Layout>
				<Sidebar showSidebar={showSidebar} />
				<Content />
			</Layout>
		</>
	);
};

export default Home;
