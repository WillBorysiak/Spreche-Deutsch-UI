import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { Rosario } from "next/font/google";

import "@fortawesome/fontawesome-svg-core/styles.css";

import Content from "../components/containers/Content";
import Header from "../components/containers/Header";
import MainLayout from "../components/layout/MainLayout";
import PageLayout from "../components/layout/PageLayout";
import DesktopSidebar from "../components/navigation/DesktopSidebar";
import MobileSidebar from "../components/navigation/MobileSidebar";
import SEO from "../components/SEO";
import "../styles/globals.css";

const rosario = Rosario({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={rosario.className}>
      <ThemeProvider enableSystem={true} attribute="class">
        <PageLayout>
          <SEO />
          <DesktopSidebar />
          <MainLayout>
            <Header />
            <MobileSidebar />
            <Content>
              <Component {...pageProps} />
            </Content>
          </MainLayout>
        </PageLayout>
      </ThemeProvider>
    </main>
  );
}

export default MyApp;
