declare module 'microsite/error' {
  import { FunctionalComponent } from "preact";
  export interface ErrorProps {
      statusCode?: number;
      title?: string;
  }
  declare const Error: FunctionalComponent<ErrorProps>;
  export default Error;
}
