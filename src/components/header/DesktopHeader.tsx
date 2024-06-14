import { useRouter } from "next/router";

import { desktopHeadingParser } from "../../helpers/desktopHeading";
import PageHeading from "../generic/typography/heading/PageHeading";
import SearchButton from "../search/SearchButton";
import ThemeToggle from "./ThemeToggle";

interface DesktopHeaderProps {
  searchClick: () => void;
}

const DesktopHeader = (props: DesktopHeaderProps) => {
  const { searchClick } = props;

  const router = useRouter();

  return (
    <div
      id="desktop-header"
      className="hidden w-full flex-row items-center justify-between lg:flex"
    >
      <div className="flex w-[125px] justify-start">
        <SearchButton searchClick={searchClick} />
      </div>

      <PageHeading text={desktopHeadingParser(router.asPath)} mobile={false} />

      <div className="flex w-[125px] justify-end">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default DesktopHeader;
