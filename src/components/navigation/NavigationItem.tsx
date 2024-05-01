import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { Transition } from "@headlessui/react";

import { Category } from "../../models/Category.model";
import { useSidebarStore } from "../../store/sidebarStore";
import SubHeading from "../generic/typography/heading/SubHeading";
import NavText from "./NavigationText";

interface NavigationItemProps {
  navigationItems: Category[];
}

const NavigationItem = (props: NavigationItemProps) => {
  const { navigationItems } = props;

  const [isVisible, setIsVisible] = useState(false);
  const [underlineheading, setUnderlineheading] = useState<string>();
  const { mobileSidebar, closeMobileSidebar } = useSidebarStore();

  const router = useRouter();

  const parentCategory = navigationItems?.[0]?.type;
  const parentRoute = router.asPath.split("/")[1];

  // active parent route opens navigation and underlines
  useEffect(() => {
    if (parentRoute === parentCategory) {
      setIsVisible(true);
      setUnderlineheading("underline decoration-2 underline-offset-4");
    } else if (parentRoute !== parentCategory) {
      setUnderlineheading("");
    }

    // always open for mobile
    if (mobileSidebar) setIsVisible(true);
  }, [router.asPath, parentCategory, parentRoute, mobileSidebar]);

  return (
    <div id="navigation-item" className="mb-10">
      <div
        className="mb-5 w-fit cursor-pointer hover:underline hover:decoration-2 hover:underline-offset-4"
        onClick={() => {
          closeMobileSidebar();
          router.push(`/${parentCategory}`);
        }}
      >
        <SubHeading text={parentCategory} className={underlineheading} />
      </div>

      {navigationItems.map((item, index) => (
        <Transition
          key={index}
          show={isVisible}
          className="default-transition mb-5 list-outside overflow-hidden"
          enterFrom="transform scale-95 opacity-0 max-h-32"
          enterTo="transform scale-100 opacity-100 max-h-32"
          leaveFrom="transform scale-100 opacity-100 max-h-32"
          leaveTo="transform scale-95 opacity-0 max-h-0"
        >
          <span
            className="w-fit cursor-pointer"
            onClick={() => {
              closeMobileSidebar();
              router.push(`/${parentCategory}/${item.route}`);
            }}
          >
            <NavText
              text={item.name}
              parentCategory={parentCategory}
              parentRoute={parentRoute}
            />
          </span>
        </Transition>
      ))}
    </div>
  );
};

export default NavigationItem;
