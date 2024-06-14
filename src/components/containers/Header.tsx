import { useState } from "react";

import { useCategoriesStore } from "../../store/categoriesStore";
import DesktopHeader from "../header/DesktopHeader";
import MobileHeader from "../header/MobileHeader";
import SearchModal from "../search/SearchModal";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { getCategoriesAsArray } = useCategoriesStore();

  // search modal
  const searchClick = () => setIsModalOpen(true);
  const searchClose = () => setIsModalOpen(false);
  const searchCategories = getCategoriesAsArray();

  return (
    <section
      id="header"
      className="light-bg dark:dark-bg flex w-full items-center px-3 py-1 lg:h-[5%] lg:py-0"
    >
      <DesktopHeader searchClick={searchClick} />
      <MobileHeader searchClick={searchClick} />
      <SearchModal
        isOpen={isModalOpen}
        onClose={searchClose}
        categories={searchCategories}
      />
    </section>
  );
};

export default Header;
