import "@/styles/globals.css";
import { PageProvider } from "@/context/PageContext";

export default function App({ Component, pageProps }) {
  return(
  <PageProvider>
    <Component {...pageProps} />
  </PageProvider>);

}
