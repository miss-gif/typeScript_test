function error(message: string): never {
  throw new Error(message);
} // 쓰로우 되는 것에 대해 아무런 리턴하지 않음

function fail() {
  return error("failed");
} // never

function infiniteLoop(): never {
  while (true) {}
} // never

let a: string = "hello";

if (typeof a !== "string") {
  a;
} // never

declare const b: string | number;

if (typeof b !== "string") {
  b;
} // number

// never 활용 예
type Indexable<T> = T extends string ? T & { [index: string]: any } : never; // 조건부 타입
// T가 string이면 T & { [index: string]: any } 아니면 never

type ObjectIndexable = Indexable<{}>;
// const b: Indexable<{}> = ""; // never
