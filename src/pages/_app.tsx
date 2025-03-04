/* eslint-disable react/no-multi-comp, @typescript-eslint/no-explicit-any */

import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import "../styles/global.css";
import "@/style/codeHike.css";
import "../styles/docs.css";
import "../styles/github-markdown.css";
import "@docsearch/css";
import "@/components/ui/Footer/AnimateSlogan.css";
import { MDXProvider } from "@mdx-js/react";
import { CH } from "@code-hike/mdx/components";
import "intersection-observer";
import { InstillAICtxProvider } from "../contexts/InstillAIContext";
import {
  MdxCtaButton,
  MdxGist,
  MdxTwitterCard,
  MdxZoomableImg,
  MdxImageGallery,
  MdxYoutubeEmbed,
  MdxQuoteBlock,
  MdxQuoteBlockProps,
} from "@/components/ui";
import { MdxInfoBlock, MdxInfoBlockProps } from "@/components/ui/MdxInfoBlock";
import {
  MdxToggleBlock,
  MdxToggleBlockProps,
} from "@/components/ui/MdxToggleBlock";
import { appWithTranslation } from "next-i18next";
import "@instill-ai/design-system/dist/index.css";
import "@instill-ai/design-tokens/dist/theme/root.css";
import "@instill-ai/design-tokens/dist/theme/light.css";
import "@instill-ai/design-tokens/dist/theme/dark.css";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "@instill-ai/design-system";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const components = {
  CH,
  QuoteBlock: (props: MdxQuoteBlockProps) => (
    <MdxQuoteBlock content={props.content} source={props.source} />
  ),
  InfoBlock: (props: MdxInfoBlockProps) => (
    <MdxInfoBlock type={props?.type} title={props?.title}>
      {props?.children}
    </MdxInfoBlock>
  ),
  ToggleBlock: (props: MdxToggleBlockProps) => (
    <MdxToggleBlock styles={props?.styles}>{props?.children}</MdxToggleBlock>
  ),
  ZoomableImg: (props: any) => (
    <MdxZoomableImg
      src={props.src}
      alt={props.alt}
      width={props.width}
      height={props.height}
      position={props.position}
    />
  ),
  Tweet: (props: any) => (
    <MdxTwitterCard tweetId={props.tweetId} position={props.position} />
  ),
  Gist: (props: any) => <MdxGist id={props.id} position={props.position} />,
  Gallery: (props: any) => (
    <MdxImageGallery
      images={props.images}
      position={props.position}
      caption={props.caption}
    />
  ),
  CtaButton: (props: any) => (
    <MdxCtaButton
      text={props.text}
      link={props.link}
      position={props.position}
    />
  ),
  Youtube: (props: any) => (
    <MdxYoutubeEmbed
      id={props.id}
      width={props.width}
      height={props.height}
      position={props.position}
    />
  ),
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <MDXProvider components={components}>
      <NextTopLoader showSpinner={false} />
      <InstillAICtxProvider>
        {getLayout(<Component {...pageProps} />)}
        <div id="zoomable-image" />
        <Toaster />
      </InstillAICtxProvider>
    </MDXProvider>
  );
}

export default appWithTranslation(MyApp);
