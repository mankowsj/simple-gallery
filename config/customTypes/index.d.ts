declare type DynamicImport<C> = () => Promise<C>;

declare type PageNavigationName = 'mainpage' | 'credits' | 'settings';

interface CMap<T> {
  [key: string]: T;
}

// declaration.d.ts
declare module '*.css' {
  const content: any;
  export default content;
}

declare module '*.json' {
  const content: any;
  export default content;
}

declare module '*.svg' {
  const content: any;
  export default content;
}

interface Empty {}

type CProps = {
  props: {
    [key: string]: any;
  };
};

type PickProps<A extends CProps, B extends keyof A['props']> = {
  [K in B]: A['props'][K];
};

type ExtractProps<A extends CProps, B extends keyof A['props']> = A['props'][B];

//
// declare module '*.css' {
//     const content: any;
//     export default content;
//     export const container: any;
// }
