import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { faMoon, faSunBright } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);

  const { resolvedTheme, setTheme } = useTheme();

  // hydration fix
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div id="theme-toggle" className="cursor-pointer">
      {resolvedTheme === "dark" && (
        <FontAwesomeIcon
          icon={faSunBright}
          size="2x"
          className="text-yellow-600"
          onClick={() => setTheme("light")}
        />
      )}
      {resolvedTheme === "light" && (
        <FontAwesomeIcon
          icon={faMoon}
          size="2x"
          className="text-zinc-600"
          onClick={() => setTheme("dark")}
        />
      )}
    </div>
  );
};

export default ThemeToggle;
