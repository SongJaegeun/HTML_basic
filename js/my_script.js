// JavaScript code 작성
// Python vs. JavaScript

// 변수 생성
// python: 변수 선언
// my_var = 100
// JS의 경우

var my_var = 100 // javascript
var tmp = 3.14 // number
var tmp1 = 'hello' // string
var tmp2 = 'true' // boolean
var tmp3 = [1,2,3,4.555] // array

// 객체 표현
var tmp4 = { name : "홍길동", age : "25"}  // like python dictionary
console.log(tmp4.name)

// 함수
// 1. 선언적 함수 (Python_의 일반_적인 함수 정의_하는 방법)
//    선언적 함수는 함수 이름이 존재
function my_add(x,y) {
    return x + y
}
console.log(my_add(5,3))

// 2. 익명 함수 (함수의 이름 X -> 일급_함수의 특징) => 람다 함수
//      변수에 저장, 다른 함수의 인자, 함수의 리턴값
var my_add2 = function (x,y) {
    return x + y
}

console.log(my_add2(2,7))




