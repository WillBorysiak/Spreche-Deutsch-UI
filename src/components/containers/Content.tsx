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
			<section
				id="content"
				className={classNames(
					mobileSidebar ? 'default-transition h-0 blur-sm sm:h-fit lg:blur-0' : '',
					'no-scrollbar light-background dark:dark-background flex justify-center overflow-y-auto transition-all duration-500 ease-in-out lg:relative lg:h-[95%]',
				)}
				onClick={() => {
					if (mobileSidebar) closeMobileSidebar();
				}}
			>
				<motion.div
					key={router.route}
					initial="initialState"
					animate="animateState"
					exit="exitState"
					transition={{ duration: 2 }}
					variants={{ initialState: { opacity: 0 }, animateState: { opacity: 1 }, exitState: { opacity: 0 } }}
				>
					{props.children}
				</motion.div>
			</section>
		</AnimatePresence>
	);
};

export default Content;
