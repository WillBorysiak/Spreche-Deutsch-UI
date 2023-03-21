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
					mobileSidebar ? 'default-transition blur-sm lg:blur-0' : '',
					'no-scrollbar light-background dark:dark-background flex h-[92.5%] justify-center overflow-y-auto transition-all duration-500 ease-in-out sm:h-[95%] lg:relative',
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
					transition={{ duration: 0.75 }}
					variants={{ initialState: { opacity: 0 }, animateState: { opacity: 1 }, exitState: { opacity: 0 } }}
				>
					{props.children}
				</motion.div>
			</section>
		</AnimatePresence>
	);
};

export default Content;
