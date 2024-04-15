export const desktopHeadingParser = (routerPath: string) => {
  const path = routerPath.split("/");
  const routeStr = path.length > 2 ? path[2] : path[1];
  const routeStrSpaces = routeStr.replace(/-/g, " ");

  return routeStrSpaces.charAt(0).toUpperCase() + routeStrSpaces.slice(1);
};
