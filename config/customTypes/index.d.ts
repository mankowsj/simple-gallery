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

type ReduxImage = {filepath: string; filename: string; extension: string; location: string; index: number};

type Extract2<T, U extends T> = T extends U ? T : never;
//
// declare module '*.css' {
//     const content: any;
//     export default content;
//     export const container: any;
// }
