import "../assets/styles/globals.css";
import { AppPropsWithLayout } from "interfaces";

import { AuthProvider } from '../context/AuthContext';

export default function Rumi({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(<AuthProvider><Component {...pageProps} /></AuthProvider>);
}
