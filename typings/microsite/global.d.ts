declare module 'microsite/global' {
  export declare const createGlobalState: <T extends object>(initialObject?: T) => T;
  export declare const useGlobalState: <T extends object>(source?: T) => T;
}
