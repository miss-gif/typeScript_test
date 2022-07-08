// Aliasing Primitive
type MyStringType = string;
const str = "world";
let myStr: MyStringType = "hello";
myStr = str;

// Aliasing Union Type
let personA: string | number = 0;
personA = "Mark";
type StringOrNumber = string | number;
let another: StringOrNumber = 0;
another = "Anna";

// Aliasing Tuple
let personB: [string, number] = ["Mark", 30];
type PersonTuple = [string, number];
let anotherA: PersonTuple = ["Anna", 20];

// Aliasing Function
type EatType = (food: string) => void;
