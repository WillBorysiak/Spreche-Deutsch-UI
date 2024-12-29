import { useEffect, useState } from "react";

import { useMediaQuery } from "react-responsive";

import DesktopLayout from "../layout/DesktopLayout";
import MobileLayout from "../layout/MobileLayout";

interface ContentProps {
  children: React.ReactNode;
}

const Content = (props: ContentProps) => {
  const { children } = props;

  const [desktopView, setDesktopView] = useState<boolean>(false);

  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });

  useEffect(() => {
    setDesktopView(isDesktop);
  }, [isDesktop]);

  return (
    <>
      {desktopView && <DesktopLayout>{children}</DesktopLayout>}
      {!desktopView && <MobileLayout>{children}</MobileLayout>}
    </>
  );
};

export default Content;
