import { useRouter } from "next/router";

import { AnimatePresence, motion } from "framer-motion";

import { motionVariants } from "../../helpers/framer-motion";
import BreadcrumbNav from "../navigation/RouteNavigation";

interface DesktopLayoutProps {
  children: React.ReactNode;
}

const DesktopLayout = (props: DesktopLayoutProps) => {
  const { children } = props;

  const router = useRouter();

  return (
    <AnimatePresence mode="wait">
      <section
        id="desktop-layout"
        className="no-scrollbar mx-auto flex h-[95%] w-full max-w-8xl flex-col items-center overflow-y-auto px-5"
      >
        <motion.div
          key={router.asPath}
          className="h-full w-full"
          initial="initialState"
          animate="animateState"
          exit="exitState"
          transition={{ duration: 2 }}
          variants={motionVariants}
        >
          {router.asPath !== "/" && <BreadcrumbNav />}
          {children}
        </motion.div>
      </section>
    </AnimatePresence>
  );
};

export default DesktopLayout;
