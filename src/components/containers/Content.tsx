import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { classNames } from '../../helpers/classNames';
import { useSidebarStore } from '../../store/sidebarStore';

interface ContentProps {
	children: React.ReactNode;
}

const Content = (props: ContentProps) => {
	const { mobileSidebar, closeMobileSidebar } = useSidebarStore();

	const router = useRouter();

	return (
		<AnimatePresence mode="wait">
			<motion.section
				id="content"
				className={classNames(
					mobileSidebar ? 'h-0 opacity-0 blur-sm sm:h-fit sm:opacity-100' : '',
					'no-scrollbar light-background dark:dark-background default-transition flex justify-center overflow-y-auto lg:relative lg:h-[95%]',
				)}
				key={router.route}
				initial="initialState"
				animate="animateState"
				exit="exitState"
				transition={{ duration: 0.5 }}
				variants={{ initialState: { opacity: 0 }, animateState: { opacity: 1 }, exitState: { opacity: 0 } }}
				onClick={() => {
					if (mobileSidebar) closeMobileSidebar();
				}}
			>
				{props.children}
			</motion.section>
		</AnimatePresence>
	);
};

export default Content;
