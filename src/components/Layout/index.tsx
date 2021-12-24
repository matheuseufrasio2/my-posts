import type { AppProps } from "next/app";
import Head from "next/head";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { GlobalStyles } from "styles/global";
import usePersistedState from "utils/usePersistedState";

import light from "../../styles/themes/light";
import dark from "../../styles/themes/dark";
import { Footer } from "components/Footer";
import { Header } from "components/Header";

export default function Layout({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>My Posts</title>
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />

        <meta name="description" content="An example for blog" />
      </Head>
      <GlobalStyles />
      <Header toggleTheme={toggleTheme} />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}
