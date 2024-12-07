import { useRouter } from "next/router";

import { Category } from "../../models/Category.model";
import { useSidebarStore } from "../../store/sidebar-store";
import SiteHeading from "../generic/typography/heading/SiteHeading";
import SearchDialog from "../search/SearchDialog";
import SidebarToggle from "./SidebarToggle";

interface MobileHeaderProps {
  categories: Category[];
}

const MobileHeader = (props: MobileHeaderProps) => {
  const { categories } = props;

  const { mobileSidebar, closeMobileSidebar, toggleMobileSidebar } =
    useSidebarStore();

  const router = useRouter();

  const clickSiteHeading = () => {
    closeMobileSidebar();
    router.push("/");
  };

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

      <span onClick={() => clickSiteHeading()}>
        <SiteHeading text="Spreche Deutsch" />
      </span>

      <div className="flex w-[50px] justify-end">
        <SearchDialog categories={categories} display="mobile" />
      </div>
    </div>
  );
};

export default MobileHeader;
