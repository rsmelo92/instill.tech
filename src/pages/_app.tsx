/* eslint-disable react/no-multi-comp */

import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import "../styles/global.css";
import "@/style/codeHike.css";
import "../styles/docs.css";
import "@docsearch/css";
import "@/components/ui/Footer/AnimateSlogan.css";
import { MDXProvider } from "@mdx-js/react";
import { CH } from "@code-hike/mdx/components";
import "intersection-observer";
import { AnnouncementBarCtxProvider } from "../contexts/AnnouncementBarContext";
import { ZoomableImg } from "@/components/ui";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const components = {
  CH,
  ZoomableImg: (props: any) => (
    <ZoomableImg
      src={props.src}
      alt={props.alt}
      width={props.width}
      height={props.height}
    />
  ),
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <MDXProvider components={components}>
      <AnnouncementBarCtxProvider>
        {getLayout(<Component {...pageProps} />)}
      </AnnouncementBarCtxProvider>
    </MDXProvider>
  );
}

export default MyApp;
