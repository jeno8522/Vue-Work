// ConciseMethod (간결한 메소드)

// 함수 선언 형식
// function a() { } // 명명(익명) 함수 선언
// const a = function () { } // 명명 함수 표현
// const a = new Function('x', 'y', 'return x + y') // 함수 생성자

// ES6 이전
// const id = "ssafy";
// const name = "주창훈";
// const age = 27;
// const user = {
//   id,
//   name,
//   age,
//   info: function () {
//     console.log(name + "(" + id + ") 나이 : " + age);
//   },
// };

// console.log(user);
// user.info();
// ES6 이후

// const id = "ssafy";
// const name = "주창훈";
// const age = 27;
// const user = {
//   id,
//   name,
//   age,
//   info() {
//     console.log(name + "(" + id + ") 나이 : " + age);
//   },
// };
// user.info();

const user1 = {
  a: 1,
  b: 2,
  c: 3,
  d: { com: "ssafy" },
};

const ref = user1;
const copy = { ...user1 };

user1.a = 100;
user1.d.com = "a;sdkfj;a";
console.log("-----ref--------");
console.log(ref.a);
console.log(ref.d.com);

console.log("-----copy--------");
console.log(copy.a);
console.log(copy.d.com);
