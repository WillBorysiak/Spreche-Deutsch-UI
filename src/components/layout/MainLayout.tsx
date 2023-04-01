interface LayoutPropTypes {
	children: React.ReactNode;
}

const MainLayout = (props: LayoutPropTypes) => {
	return (
		<div id="main-layout" className="lg:h-full lg:w-full">
			{props.children}
		</div>
	);
};

export default MainLayout;
