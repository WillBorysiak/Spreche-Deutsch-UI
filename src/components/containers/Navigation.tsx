import { useRouter } from "next/router";

import { motion } from "framer-motion";

import { ContentTypeEnum } from "../../enums/ContentTypeEnum";
import { motionVariants } from "../../helpers/framer-motion";
import { useCategoriesStore } from "../../store/categories-store";
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
          />
          <NavigationItem
            navigationItems={getCategoriesByType(ContentTypeEnum.Sentences)}
          />
          <NavigationItem
            navigationItems={getCategoriesByType(ContentTypeEnum.Concepts)}
          />
          <NavigationItem
            navigationItems={getCategoriesByType(ContentTypeEnum.Resources)}
          />
        </div>
      )}
    </motion.nav>
  );
};

export default Navigation;
