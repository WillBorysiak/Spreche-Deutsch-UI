import { ReactNode } from "react";

import { ThemeProvider } from "next-themes";
import { Rosario } from "next/font/google";

import "@fortawesome/fontawesome-svg-core/styles.css";

import Content from "../components/containers/Content";
import Header from "../components/containers/Header";
import MainLayout from "../components/layout/MainLayout";
import PageLayout from "../components/layout/PageLayout";
import DesktopSidebar from "../components/navigation/DesktopSidebar";
import MobileSidebar from "../components/navigation/MobileSidebar";
import "../styles/globals.css";
import { SEOMetadata } from "./seo-metadata";

const rosario = Rosario({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata = SEOMetadata;

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={rosario.className}>
        <ThemeProvider enableSystem={true} attribute="class">
          <PageLayout>
            <DesktopSidebar />
            <MainLayout>
              <Header />
              <MobileSidebar />
              <Content>{children}</Content>
            </MainLayout>
          </PageLayout>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
