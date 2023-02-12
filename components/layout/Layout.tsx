import { useEffect, useState } from 'react';
import { useStore } from '../../store/store';

interface LayoutPropTypes {
	children: React.ReactNode;
}

const Layout = (props: LayoutPropTypes) => {
	const { showSidebar, openSidebar, closeSidebar } = useStore();
	const [width, setWidth] = useState<number>(0);

	useEffect(() => {
		const handleWindowResize = () => setWidth(window.innerWidth);
		window.addEventListener('resize', handleWindowResize);

		// always open on desktop
		if (width > 1024) openSidebar();

		// intially close  on mobile
		if (width < 1024 && showSidebar === true) closeSidebar();

		return () => window.removeEventListener('resize', handleWindowResize);
	}, [width]);

	return <div className="flex flex-row">{props.children}</div>;
};

export default Layout;
