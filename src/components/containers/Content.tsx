import { useMediaQuery } from "react-responsive";

import DesktopLayout from "../layout/DesktopLayout";
import MobileLayout from "../layout/MobileLayout";

interface ContentProps {
  children: React.ReactNode;
}

const Content = (props: ContentProps) => {
  const { children } = props;

  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });

  return (
    <>
      {isDesktop ? (
        <DesktopLayout>{children}</DesktopLayout>
      ) : (
        <MobileLayout>{children}</MobileLayout>
      )}
    </>
  );
};

export default Content;
