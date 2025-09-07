declare module 'microsite/document' {
  import { h, FunctionalComponent, JSX, ComponentType, ComponentProps } from "preact";
  export declare const __HeadContext: import("preact").Context<{
      head: {
          current: any[];
      };
  }>;
  /** @internal */
  export declare const __InternalDocContext: import("preact").Context<any>;
  interface RenderPageResult {
      __renderPageResult: any;
      [key: string]: any;
  }
  export declare const defineDocument: <T extends ComponentType<any>>(Document: T, ctx: {
      prepare: (ctx: {
          renderPage: () => Promise<RenderPageResult>;
      }) => Promise<Pick<ComponentProps<T>, Exclude<keyof ComponentProps<T>, "children">> & RenderPageResult>;
  }) => T & {
      prepare: (ctx: {
          renderPage: () => Promise<RenderPageResult>;
      }) => Promise<Pick<ComponentProps<T>, Exclude<keyof ComponentProps<T>, "children">> & RenderPageResult>;
  };
  export declare const Document: (() => h.JSX.Element) & {
      prepare: (ctx: {
          renderPage: () => Promise<RenderPageResult>;
      }) => Promise<Pick<unknown, never> & RenderPageResult>;
  };
  export declare const Html: FunctionalComponent<JSX.HTMLAttributes<HTMLHtmlElement>>;
  export declare const Main: FunctionalComponent<Omit<JSX.HTMLAttributes<HTMLDivElement>, "id" | "dangerouslySetInnerHTML" | "children">>;
  export declare const Head: FunctionalComponent<JSX.HTMLAttributes<HTMLHeadElement>>;
  export declare const MicrositeScript: FunctionalComponent;
  export {};
}
