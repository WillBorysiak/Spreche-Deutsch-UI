import { ReactNode } from "react";

import { useRouter } from "next/router";

import { classNames } from "../../helpers/class-names";
import { useSidebarStore } from "../../store/sidebar-store.store";
import BreadcrumbNav from "../navigation/RouteNavigation";

interface MobileLayoutProps {
  children: ReactNode;
}

const MobileLayout = (props: MobileLayoutProps) => {
  const { children } = props;

  const { mobileSidebar, closeMobileSidebar } = useSidebarStore();

  const router = useRouter();

  return (
    <section
      id="mobile-layout"
      className={classNames(
        mobileSidebar ? "h-0 blur-sm lg:h-fit lg:blur-0" : "",
        "no-scrollbar default-transition mx-auto flex w-full max-w-8xl flex-col items-center overflow-y-auto px-2 md:px-5 lg:h-[95%]",
      )}
      onClick={() => {
        if (mobileSidebar) closeMobileSidebar();
      }}
    >
      <div className="h-full w-full">
        {router.asPath !== "/" && <BreadcrumbNav />}
        {children}
      </div>
    </section>
  );
};

export default MobileLayout;
