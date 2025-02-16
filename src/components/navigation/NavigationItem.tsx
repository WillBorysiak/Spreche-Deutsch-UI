import { useEffect, useState } from "react";

import { usePathname, useRouter } from "next/navigation";

import { Transition } from "@headlessui/react";

import { ContentTypeEnum } from "../../enums/ContentTypeEnum.enum";
import { Category } from "../../models/Category.model";
import { useSidebarStore } from "../../store/sidebar-store.store";
import NavigationHeading from "./NavigationHeading";
import NavigationText from "./NavigationText";

interface NavigationItemProps {
  navigationItems: Category[];
  parentCategory: ContentTypeEnum;
}

const NavigationItem = (props: NavigationItemProps) => {
  const { navigationItems, parentCategory } = props;

  const [isVisible, setIsVisible] = useState(false);
  const [underlineHeading, setUnderlineHeading] = useState<boolean>();

  const { mobileSidebar, closeMobileSidebar } = useSidebarStore();

  const router = useRouter();
  const routerPath = usePathname();

  const parentRoute = routerPath.split("/").at(1)!;

  // active parent route opens navigation and underlines
  useEffect(() => {
    const routeMatchesCategory = parentRoute === parentCategory;

    if (routeMatchesCategory) {
      setIsVisible(true);
      setUnderlineHeading(true);
    } else if (!routeMatchesCategory) {
      setUnderlineHeading(false);
    }

    // always open for mobile
    if (mobileSidebar) setIsVisible(true);
  }, [parentCategory, parentRoute, mobileSidebar]);

  const clickParentNavigation = () => {
    closeMobileSidebar();
    router.push(`/${parentCategory}`);
  };

  return (
    <div id="navigation-item" className="mb-10">
      <div
        className="mb-5 w-fit cursor-pointer hover:underline hover:decoration-2 hover:underline-offset-4"
        onClick={() => clickParentNavigation()}
      >
        <NavigationHeading
          heading={parentCategory}
          underlineHeading={underlineHeading}
        />
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
