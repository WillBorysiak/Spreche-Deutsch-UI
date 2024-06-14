import { useRouter } from "next/router";

import SiteHeading from "../generic/typography/heading/SiteHeading";
import SearchButton from "../search/SearchButton";
import SidebarToggle from "./SidebarToggle";
import { useSidebarStore } from "../../store/sidebarStore";

interface MobileHeaderProps {
  searchClick: () => void;
}

const MobileHeader = (props: MobileHeaderProps) => {
  const { searchClick } = props;

  const { mobileSidebar, closeMobileSidebar, toggleMobileSidebar } =
    useSidebarStore();

  const router = useRouter();

  return (
    <div
      id="mobile-header"
      className="flex w-full items-center justify-between lg:hidden"
    >
      <div className="flex w-[50px] justify-start">
        <SidebarToggle
          mobileSidebar={mobileSidebar}
          toggleMobileSidebar={toggleMobileSidebar}
        />
      </div>

      <span
        className="px-3"
        onClick={() => {
          closeMobileSidebar();
          router.push("/");
        }}
      >
        <SiteHeading text="Spreche Deutsch" />
      </span>

      <div className="flex w-[50px] justify-end">
        <SearchButton searchClick={searchClick} />
      </div>
    </div>
  );
};

export default MobileHeader;
