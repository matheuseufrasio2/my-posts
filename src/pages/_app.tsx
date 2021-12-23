import NextNProgress from "nextjs-progressbar";

import dynamic from "next/dynamic";
import type { AppProps } from "next/app";

const LayoutWithoutSSR = dynamic(() => import("../components/Layout"), {
  ssr: false,
});

function MyApp(props: AppProps) {
  return (
    <>
      <NextNProgress
        color="#f231a5"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />

      <LayoutWithoutSSR {...props} />
    </>
  );
}
export default MyApp;
