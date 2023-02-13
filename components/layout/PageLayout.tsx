interface LayoutPropTypes {
	children: React.ReactNode;
}

const PageLayout = (props: LayoutPropTypes) => {
	return <div className="flex h-screen w-screen flex-col  lg:flex-row">{props.children}</div>;
};

export default PageLayout;
