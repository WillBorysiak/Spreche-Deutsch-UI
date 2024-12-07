import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { Transition } from "@headlessui/react";

import { Category } from "../../models/Category.model";
import { useSidebarStore } from "../../store/sidebar-store";
import SubHeading from "../generic/typography/heading/SubHeading";
import NavigationText from "./NavigationText";

interface NavigationItemProps {
  navigationItems: Category[];
}

const NavigationItem = (props: NavigationItemProps) => {
  const { navigationItems } = props;

  const [isVisible, setIsVisible] = useState(false);
  const [underlineHeading, setUnderlineHeading] = useState<boolean>();

  const { mobileSidebar, closeMobileSidebar } = useSidebarStore();

  const router = useRouter();

  const parentCategory = navigationItems?.[0]?.type;
  const parentRoute = router.asPath.split("/")[1];

  // active parent route opens navigation and underlines
  useEffect(() => {
    if (parentRoute === parentCategory) {
      setIsVisible(true);
      setUnderlineHeading(true);
    } else if (parentRoute !== parentCategory) {
      setUnderlineHeading(false);
    }

    // always open for mobile
    if (mobileSidebar) setIsVisible(true);
  }, [router.asPath, parentCategory, parentRoute, mobileSidebar]);

  const parentNavigationClick = () => {
    closeMobileSidebar();
    router.push(`/${parentCategory}`);
  };

  return (
    <div id="navigation-item" className="mb-10">
      <div
        className="mb-5 w-fit cursor-pointer hover:underline hover:decoration-2 hover:underline-offset-4"
        onClick={() => parentNavigationClick()}
      >
        <SubHeading text={parentCategory} underlineHeading={underlineHeading} />
      </div>

      {navigationItems.map((item, index) => (
        <Transition
          key={index}
          show={isVisible}
          enterFrom="transform scale-95 opacity-0 max-h-32"
          enterTo="transform scale-100 opacity-100 max-h-32"
          leaveFrom="transform scale-100 opacity-100 max-h-32"
          leaveTo="transform scale-95 opacity-0 max-h-0"
        >
          <span className="default-transition">
            <NavigationText
              text={item.name}
              parentCategory={parentCategory}
              parentRoute={parentRoute}
              childRoute={item.route}
            />
          </span>
        </Transition>
      ))}
    </div>
  );
};

export default NavigationItem;
