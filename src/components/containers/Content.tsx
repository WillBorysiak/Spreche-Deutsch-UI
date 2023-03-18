import { classNames } from '../../helpers/classNames';
import { useSidebarStore } from '../../store/sidebarStore';

interface ContentProps {
	children: React.ReactNode;
}

const Content = (props: ContentProps) => {
	const { mobileSidebar, closeMobileSidebar } = useSidebarStore();

	return (
		<section
			id="content"
			className={classNames(
				mobileSidebar ? 'default-transition blur-sm lg:blur-0' : '',
				'no-scrollbar light-background dark:dark-background flex h-[92.5%] justify-center overflow-y-auto transition-all duration-500 ease-in-out sm:h-[95%] lg:relative',
			)}
			onClick={() => {
				if (mobileSidebar) closeMobileSidebar();
			}}
		>
			{props.children}
		</section>
	);
};

export default Content;
