import "../assets/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { AppPropsWithLayout } from "interfaces";

export default function Rumi({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
