export class HeadingHelper {
  static getDesktopHeading(routerPath: string) {
    const route = routerPath.split("/");
    const routeStr = route.length > 2 ? route[2] : route[1];
    const routeStrSpaces = routeStr.replace(/-/g, " ");

    return routeStrSpaces.charAt(0).toUpperCase() + routeStrSpaces.slice(1);
  }

  static getNavigationSubHeading(text: string | undefined) {
    let headingText = text;

    if (headingText?.includes("-")) {
      headingText = headingText.replace(/-/g, " ");
    }

    return headingText;
  }
}
