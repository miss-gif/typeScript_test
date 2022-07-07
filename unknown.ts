declare const maybe: unknown;
// const aNumber: number = maybe; // unknown은 number를 할당 할 수 없음

if (maybe === true) {
  const aBoolean: boolean = maybe;
  // const aString: string = maybe;
} // if문 안의 maybe는 boolean이라 string은 할당 할 수 없음

if (typeof maybe === "string") {
  const aString: string = maybe;
  // const aBoolean: boolean = maybe;
} // if문 안의 maybe는 string이라 boolean을 할당 할 수 없음
