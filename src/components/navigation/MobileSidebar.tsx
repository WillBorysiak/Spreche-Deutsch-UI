import { Transition } from "@headlessui/react";

import { useSidebarStore } from "../../store/sidebar-store.store";
import Navigation from "../containers/Navigation";

const MobileSidebar = () => {
  const { mobileSidebar } = useSidebarStore();

  return (
    <Transition
      show={mobileSidebar}
      enter="default-transition transform"
      enterFrom="-translate-x-full"
      enterTo="translate-x-0"
      leave="default-transition transform"
      leaveFrom="translate-x-0"
      leaveTo="-translate-x-full"
    >
      <section
        id="mobile-sidebar"
        className="no-scrollbar light-bg dark:dark-bg absolute z-10 w-screen overflow-y-auto lg:hidden"
      >
        <Navigation />
      </section>
    </Transition>
  );
};

export default MobileSidebar;
