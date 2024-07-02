import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface NavigationTextProps {
  text: string;
  parentCategory: string;
  parentRoute: string;
}

const NavigationText = (props: NavigationTextProps) => {
  const { text, parentCategory, parentRoute } = props;

  const [underline, setUnderline] = useState(false);

  const router = useRouter();

  // active child route underlines
  useEffect(() => {
    const childRoute = router.asPath.split("/")[2];
    const textValue = text.toLowerCase();

    const isParentActive = parentCategory === parentRoute;
    const isChildActive = childRoute === textValue;

    if (isParentActive && isChildActive) {
      setUnderline(true);
    } else {
      setUnderline(false);
    }
  }, [router, text, parentCategory, parentRoute]);

  return (
    <li
      className={`mb-3 text-lg decoration-2 hover:underline hover:underline-offset-4 sm:text-xl ${underline ? "underline underline-offset-4" : ""}`}
    >
      {text}
    </li>
  );
};

export default NavigationText;
