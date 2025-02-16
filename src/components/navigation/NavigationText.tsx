import { useEffect, useState } from "react";

import { useRouter, usePathname } from "next/navigation";

import { useSidebarStore } from "../../store/sidebar-store.store";

interface NavigationTextProps {
  text: string;
  parentCategory: string;
  parentRoute: string;
  childRoute: string;
}

const NavigationText = (props: NavigationTextProps) => {
  const { text, parentCategory, parentRoute, childRoute } = props;

  const [underline, setUnderline] = useState(false);

  const { closeMobileSidebar } = useSidebarStore();

  const router = useRouter();
  const routerPath = usePathname();

  // active child route underlines
  useEffect(() => {
    const childRoute = routerPath.split("/").at(2);
    const childText = text.toLowerCase();

    const isParentActive = parentCategory === parentRoute;
    const isChildActive = childRoute === childText;
    const isChildAndParentActive = isParentActive && isChildActive;

    if (isChildAndParentActive) {
      setUnderline(true);
    } else {
      setUnderline(false);
    }
  }, [routerPath, text, parentCategory, parentRoute]);

  const clickChildNavigation = () => {
    closeMobileSidebar();
    router.push(`/${parentCategory}/${childRoute}`);
  };

  return (
    <li className="mb-3 text-lg sm:text-xl">
      <span
        className={`cursor-pointer decoration-2 hover:underline hover:underline-offset-4 ${underline && "underline underline-offset-4"}`}
        onClick={() => clickChildNavigation()}
      >
        {text}
      </span>
    </li>
  );
};

export default NavigationText;
