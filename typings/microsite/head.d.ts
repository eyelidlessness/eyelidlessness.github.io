declare module 'microsite/head' {
  import { FunctionalComponent } from "preact";
  import { Ref } from "preact/hooks";
  export declare let warned: boolean;
  interface OpenGraphBase {
      title?: string;
      description?: string;
      url?: string;
      locale?: string;
      altLocales?: string[];
      siteName?: string;
  }
  declare type OpenGraph = OpenGraphArticle | OpenGraphProfile | OpenGraphBook | OpenGraphWebsite;
  interface OpenGraphProfile extends OpenGraphBase {
      type?: "profile";
      firstName?: string;
      lastName?: string;
      username?: string;
      gender?: "male" | "female";
  }
  interface OpenGraphBook extends OpenGraphBase {
      type?: "book";
      authors?: string[];
      isbn?: string;
      releaseDate?: Date;
      tags?: string[];
  }
  interface OpenGraphArticle extends OpenGraphBase {
      type?: "article";
      publishedTime?: Date;
      modifiedTime?: Date;
      expirationTime?: Date;
      authors?: string[];
      section?: string;
      tags?: string[];
  }
  interface OpenGraphWebsite extends OpenGraphBase {
      type?: "website";
  }
  interface SEO {
      robots?: {
          noindex?: boolean;
          nofollow?: boolean;
      };
      title?: string;
      description?: string;
      images?: {
          src: string;
          alt?: string;
          width?: number;
          height?: number;
      }[];
      videos?: {
          src: string;
          width?: number;
          height?: number;
      }[];
      audio?: {
          src: string;
      }[];
      canonical?: string;
      facebook?: {
          appId?: string;
      };
      twitter?: {
          site?: string;
          handle?: string;
          card?: "summary" | "summary_large_image" | "app" | "player";
      };
      openGraph?: OpenGraph;
  }
  export declare const __SeoContext: import("preact").Context<{
      seo: Ref<SEO>;
  }>;
  export declare const Head: FunctionalComponent<any>;
  export declare const seo: {
      robots: FunctionalComponent<{
          children?: never;
      } & {
          noindex?: boolean;
          nofollow?: boolean;
      }>;
      title: FunctionalComponent<{}>;
      description: FunctionalComponent<{}>;
      image: FunctionalComponent<{
          children?: never;
      } & {
          src: string;
          alt?: string;
          width?: number;
          height?: number;
      }>;
      video: FunctionalComponent<{
          children?: never;
      } & {
          src: string;
          width?: number;
          height?: number;
      }>;
      audio: FunctionalComponent<{
          children?: never;
      } & {
          src: string;
      }>;
      canonical: FunctionalComponent<{}>;
      twitter: FunctionalComponent<{
          site?: string;
          handle?: string;
          card?: "summary" | "summary_large_image" | "app" | "player";
      }>;
      facebook: FunctionalComponent<{
          appId?: string;
      }>;
      openGraph: FunctionalComponent<OpenGraph>;
  };
  export {};
}
