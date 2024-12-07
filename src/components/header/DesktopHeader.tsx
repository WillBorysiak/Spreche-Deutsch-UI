import { useRouter } from "next/router";

import { HeadingHelper } from "../../helpers/headingHelper";
import { Category } from "../../models/Category.model";
import PageHeading from "../generic/typography/heading/PageHeading";
import ThemeToggle from "./ThemeToggle";
import SearchDialog from "../search/SearchDialog";

interface DesktopHeaderProps {
  categories: Category[];
}

const DesktopHeader = (props: DesktopHeaderProps) => {
  const { categories } = props;

  const router = useRouter();
  const routerPath = router.asPath;

  const desktopHeading = HeadingHelper.getDesktopHeading(routerPath);

  return (
    <div
      id="desktop-header"
      className="hidden w-full flex-row items-center justify-between lg:flex"
    >
      <SearchDialog categories={categories} display="desktop" />

      <PageHeading text={desktopHeading} mobile={false} />

      <div className="flex w-[125px] justify-end">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default DesktopHeader;
