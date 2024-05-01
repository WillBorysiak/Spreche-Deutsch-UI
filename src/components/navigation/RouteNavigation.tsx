import Link from "next/link";
import { useRouter } from "next/router";

import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";

const RouteNavigation = () => {
  const router = useRouter();

  const path = router.asPath.replace(/^\/+/g, "");
  const segments = path.split("/");
  const breadcrumbs = segments.map((segment, idx) => {
    const segmentName = segment.replace(/-/g, " ");
    const href = `/${segments.slice(0, idx + 1).join("/")}`;

    return {
      name: segmentName,
      href: href,
      current: idx === segments.length - 1,
    };
  });

  return (
    <nav className="mt-1 flex justify-center">
      <ol role="list" className="flex items-center space-x-4">
        <Link href="/" className="text-zinc-900  dark:text-zinc-200">
          <HomeIcon className="h-5 w-5 flex-shrink-0" />
        </Link>

        {breadcrumbs.map((breadcrumb, index) => (
          <li key={index}>
            <div className="flex items-center">
              <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-zinc-900 dark:text-zinc-200" />
              <Link
                href={breadcrumb.href}
                className={`ml-3 text-lg font-medium capitalize sm:text-lg  ${
                  breadcrumb.current
                    ? "text-zinc-900 underline decoration-2 underline-offset-4 dark:text-zinc-200"
                    : "capitalize text-zinc-900 decoration-2 hover:underline hover:underline-offset-4 dark:text-zinc-200"
                }`}
              >
                {breadcrumb.name}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default RouteNavigation;
