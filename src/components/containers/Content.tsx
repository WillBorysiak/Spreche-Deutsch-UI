import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';

import { classNames } from '../../helpers/classNames';
import { motionVariants } from '../../helpers/framerMotion';
import { useSidebarStore } from '../../store/sidebarStore';
import BreadcrumbNav from '../layout/BreadcrumbNav';

const Content = (props: { children: React.ReactNode }) => {
	const { children } = props;

	const { mobileSidebar, closeMobileSidebar } = useSidebarStore();

	const router = useRouter();

	return (
		<AnimatePresence mode="wait">
			<section
				id="content"
				className={classNames(
					mobileSidebar ? 'default-transition h-0 blur-sm sm:h-fit lg:blur-0' : '',
					'no-scrollbar default-transition mx-auto flex w-full max-w-8xl flex-col items-center overflow-y-auto sm:px-6 lg:relative lg:h-[95%] lg:px-8',
				)}
				onClick={() => {
					if (mobileSidebar) closeMobileSidebar();
				}}
			>
				<motion.div
					key={router.route}
					className="w-full"
					initial="initialState"
					animate="animateState"
					exit="exitState"
					transition={{ duration: 2 }}
					variants={motionVariants}
				>
					{router.asPath !== '/' && <BreadcrumbNav />}
					{children}
				</motion.div>
			</section>
		</AnimatePresence>
	);
};

export default Content;
