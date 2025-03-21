"use client";

import { useRouter } from "next/navigation";

import { motion } from "framer-motion";

import { ContentTypeEnum } from "../../enums/ContentTypeEnum.enum";
import { motionVariants } from "../../helpers/framer-motion";
import { useCategoriesStore } from "../../store/categories-store.store";
import SiteHeading from "../generic/typography/heading/SiteHeading";
import NavigationItem from "../navigation/NavigationItem";

const Navigation = () => {
  const { hasCategories, getCategoriesByType } = useCategoriesStore();

  const router = useRouter();

  return (
    <motion.nav
      id="navigation"
      className="flex h-full flex-col py-10 pl-10 pr-5"
      initial="initialState"
      animate="animateState"
      exit="exitState"
      transition={{ duration: 2 }}
      variants={motionVariants}
    >
      <span
        id="desktop-site-heading"
        className="mb-10 hidden cursor-pointer text-center lg:block"
        onClick={() => router.push("/")}
      >
        <SiteHeading text="Spreche Deutsch" />
      </span>

      {hasCategories() && (
        <div
          id="navigation-container"
          className="no-scrollbar h-full overflow-y-auto"
        >
          <NavigationItem
            navigationItems={getCategoriesByType(ContentTypeEnum.Words)}
            parentCategory={ContentTypeEnum.Words}
          />
          <NavigationItem
            navigationItems={getCategoriesByType(ContentTypeEnum.Sentences)}
            parentCategory={ContentTypeEnum.Sentences}
          />
          <NavigationItem
            navigationItems={getCategoriesByType(ContentTypeEnum.Concepts)}
            parentCategory={ContentTypeEnum.Concepts}
          />
        </div>
      )}
    </motion.nav>
  );
};

export default Navigation;
