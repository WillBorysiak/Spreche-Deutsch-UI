import { useCategoriesStore } from "../../store/categories-store";
import DesktopHeader from "../header/DesktopHeader";
import MobileHeader from "../header/MobileHeader";

const Header = () => {
  const { getCategoriesAsArray } = useCategoriesStore();

  const categories = getCategoriesAsArray();

  return (
    <section
      id="header"
      className="light-bg dark:dark-bg flex w-full items-center px-3 py-1 lg:h-[5%] lg:py-0"
    >
      <DesktopHeader categories={categories} />
      <MobileHeader categories={categories} />
    </section>
  );
};

export default Header;
