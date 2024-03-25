// 1. 타입의 종류
// number
// string
// boolean
// null
// undefined
// any(기타)(잘사용하진 않는다.)

let a:number = 3;
let b:string = "love you";

let c:any = 3;
c = "asd";

// 두가지 타입을 정해주는 것도 가능하다.
let d : number | string = "asdsd";
d = 123;

let e:string[] = ["apple", "banana"];

let f:number[] = [3, 6];

function addNumber (a:number, b:number):number {
  return a + b;
}

addNumber(3, 7);
// tsc index.ts