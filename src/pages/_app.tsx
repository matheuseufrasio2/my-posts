import NextNProgress from "nextjs-progressbar";

import dynamic from "next/dynamic";
import type { AppProps } from "next/app";

import { Provider } from "react-redux";
import store from "store";

const LayoutWithoutSSR = dynamic(() => import("../components/Layout"), {
  ssr: false,
});

function MyApp(props: AppProps) {
  return (
    <>
      <NextNProgress
        color="#23a7ff"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        options={{ showSpinner: false }}
      />

      <Provider store={store}>
        <LayoutWithoutSSR {...props} />
      </Provider>
    </>
  );
}
export default MyApp;
