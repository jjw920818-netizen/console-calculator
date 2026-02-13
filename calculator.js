let a = 10;
let b = 5;

let operator = '+';
// let operator = '-';
// let operator = '*';
// let operator = '/';

if (operator === "+") {
    console.log(a + b);
}
else if (operator === "-") {
    console.log(a - b);
}
else if (operator === "*") {
    console.log(a * b);
}
else if (operator === "/") {
    console.log(a / b);
}
else {
    console.log("지원하지 않는 연산자입니다.")
}