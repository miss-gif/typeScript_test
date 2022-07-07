// create by object literal
const person1 = { name: "Mark", age: 30 }; // 오브젝트 리터럴

// person1은 타입스크립트에서 오브젝트가 아니다.
// person1 "{ name: string, age: number }"

const person2 = Object.create({ name: "Mark", age: 30 });
const person2 = Object.create({});
// const person2 = Object.create(30); // Error

// 프리미티브 타입이 아닌 것 = 오브젝트
