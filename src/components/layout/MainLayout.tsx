interface LayoutPropTypes {
	children: React.ReactNode;
}

const MainLayout = (props: LayoutPropTypes) => {
	return (
		<div id="main-layout" className="light-background dark:dark-background w-full lg:h-full">
			{props.children}
		</div>
	);
};

export default MainLayout;
