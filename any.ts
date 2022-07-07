function returnAny(message: any): any {
  console.log(message);
}

const any1 = returnAny("리턴은 아무거나");

any1.toString();

// any 사용을 타입의 안정성을 잃는 예

let looselyTyped: any = {};

const d = looselyTyped.a.b.c.d;

// any 사용을 타입의 안정성을 잃는 예

function leakingAny(obj: any) {
  // const a = obj.num;
  const a: number = obj.num; // 타입 가드로 누수를 막음
  const b = a + 1;
  return b;
}

const c = leakingAny({ num: 0 });
c.indexOf("0");
