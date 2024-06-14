import { faBars, faX } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Transition } from "@headlessui/react";

interface SidebarToggleProps {
  mobileSidebar: boolean;
  toggleMobileSidebar: () => void;
}

const SidebarToggle = (props: SidebarToggleProps) => {
  const { mobileSidebar, toggleMobileSidebar } = props;

  return (
    <button
      id="sidebar-toggle"
      className="mr-7 flex items-center justify-start"
      onClick={toggleMobileSidebar}
    >
      <Transition
        className="absolute"
        show={!mobileSidebar}
        enter="default-transition"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="default-transition"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <FontAwesomeIcon icon={faBars} size="2x" />
      </Transition>

      <Transition
        className="absolute"
        show={mobileSidebar}
        enter="default-transition"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="default-transition"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <FontAwesomeIcon icon={faX} size="2x" />
      </Transition>
    </button>
  );
};

export default SidebarToggle;
