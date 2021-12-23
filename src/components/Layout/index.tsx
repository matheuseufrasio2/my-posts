import Header from "components/Header";
import type { AppProps } from "next/app";
import Head from "next/head";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { GlobalStyles } from "styles/global";
import usePersistedState from "utils/usePersistedState";

import light from "../../styles/themes/light";
import dark from "../../styles/themes/dark";

export default function Layout({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>My Posts</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />

        <meta
          name="description"
          content="Um boilerplate simples para se iniciar projetos com o create-next-app"
        />
      </Head>
      <GlobalStyles />
      <Header toggleTheme={toggleTheme} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
