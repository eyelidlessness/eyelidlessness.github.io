declare module 'microsite/utils/fs' {
  export declare const fileExists: (path: string) => Promise<boolean>;
  export declare const dirExists: (path: string) => Promise<boolean>;
  export declare const readDir: (path: string) => Promise<string[]>;
  export declare const rmFile: (path: string) => Promise<void>;
  export declare const writeFile: (path: string, content: string) => Promise<void>;
  export declare const rmdir: (path: string) => Promise<void>;
  export declare const mkdir: (path: string) => Promise<void>;
  export interface CopyFileOpts {
      transform?: (source: string) => string | Promise<string>;
  }
  export declare const copyFile: (src: string, dest: string, { transform }?: CopyFileOpts) => Promise<void>;
  export declare const copyDir: (src: string, dest: string) => Promise<void>;
}
