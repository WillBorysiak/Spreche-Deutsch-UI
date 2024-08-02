import { useRouter } from "next/router";

import { AnimatePresence, motion } from "framer-motion";

import { classNames } from "../../helpers/classNames";
import { motionVariants } from "../../helpers/framerMotion";
import { useSidebarStore } from "../../store/sidebarStore";
import BreadcrumbNav from "../navigation/RouteNavigation";

interface ContentProps {
  children: React.ReactNode;
}

const Content = (props: ContentProps) => {
  const { children } = props;

  const { mobileSidebar, closeMobileSidebar } = useSidebarStore();

  const router = useRouter();

  // const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });

  return (
    <AnimatePresence mode="wait">
      <section
        id="content"
        className={classNames(
          mobileSidebar
            ? "default-transition h-0 blur-sm lg:h-fit lg:blur-0"
            : "",
          "no-scrollbar default-transition mx-auto flex w-full max-w-8xl flex-col items-center overflow-y-auto px-2 md:px-5 lg:h-[95%]",
        )}
        onClick={() => {
          if (mobileSidebar) closeMobileSidebar();
        }}
      >
        <motion.div
          key={router.asPath}
          className="default-transition w-full lg:h-full"
          initial="initialState"
          animate="animateState"
          exit="exitState"
          transition={{ duration: 2 }}
          variants={motionVariants}
        >
          {router.asPath !== "/" && <BreadcrumbNav />}
          {children}
        </motion.div>

        {/* mobile */}
        {/* {!isDesktop && (
          <div className="default-transition w-full lg:h-full">
            {router.asPath !== "/" && <BreadcrumbNav />}
            {children}
          </div>
        )} */}
      </section>
    </AnimatePresence>
  );
};

export default Content;
