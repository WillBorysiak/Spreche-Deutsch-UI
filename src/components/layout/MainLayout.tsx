interface LayoutPropTypes {
	children: React.ReactNode;
}

const MainLayout = (props: LayoutPropTypes) => {
	return <div className="h-full w-full">{props.children}</div>;
};

export default MainLayout;
