interface LayoutPropTypes {
	children: React.ReactNode;
}

const PageLayout = (props: LayoutPropTypes) => {
	return (
		<div id="page-layout" className="flex flex-col lg:h-screen lg:w-screen lg:flex-row">
			{props.children}
		</div>
	);
};

export default PageLayout;
