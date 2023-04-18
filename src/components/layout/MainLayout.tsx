interface LayoutPropTypes {
	children: React.ReactNode;
}

const MainLayout = (props: LayoutPropTypes) => {
	return (
		<div id="main-layout" className="light-bg dark:dark-bg w-full lg:h-full">
			{props.children}
		</div>
	);
};

export default MainLayout;
