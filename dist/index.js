// 1. 타입의 종류
// number
// string
// boolean
// null
// undefined
// any(기타)(잘사용하진 않는다.)
let a = 3;
let b = "love you";
// 아무 타입이나 정해주는 것도 가능하다.
let c = 3;
c = "asd";
// 다양한 타입을 정해주는 것도 가능하다. (Union type)
let d = "asdsd";
d = 123;
// 배열을 지정해주는 경우
let e = ["apple", "banana"];
let f = [3, 6];
// 객체를 지정해주는 경우 (?는 옵션)
let g = {};
// 함수의 파라미터의 타입과 리턴 타입을 정할 수도 있다.
function addNumber(a, b) {
    return a + b;
}
addNumber(3, 7);
let h = 123;
let john = [123, true];
let john2 = { name: 'kim', age: '123' };
// class도 타입 지정 가능
class User {
    constructor(name) {
        this.name = name;
    }
}
//# sourceMappingURL=index.js.map