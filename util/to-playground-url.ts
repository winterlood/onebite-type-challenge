import lzs from "lz-string";

export const TYPESCRIPT_PLAYGROUND = "https://www.typescriptlang.org/play";

export function toPlaygroundUrl(code: string, config: Object = {}) {
  return `${TYPESCRIPT_PLAYGROUND}?${Object.entries(config)
    .map(([k, v]) => `${k}=${encodeURIComponent(v)}`)
    .join("&")}#code/${lzs.compressToEncodedURIComponent(code)}`;
}

/**
 * for TEST
 */

const code: string = `
/* _____________ Your Code Here _____________ */

type MyOmit<T, K> = any;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Expected1, MyOmit<Todo, "description">>>,
  Expect<Equal<Expected2, MyOmit<Todo, "description" | "completed">>>
];

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
  completed: boolean;
}

interface Expected2 {
  title: string;
}
`;

const options = {
  strict: false,
  noImplicitAny: false,
  ts: "5.1.6",
};

console.log(toPlaygroundUrl(code, options));
