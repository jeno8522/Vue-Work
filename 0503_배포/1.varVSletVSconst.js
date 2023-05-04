// var VS let Scope Test
// var a = 10;
// console.log(a);

// var a = 20;
// console.log(a);

// let b = 10;
// console.log(b);

const ssafy = {
  area: "서울",
  class: 10,
};
// console.log(ssafy);
// ssafy.area = "대전";
// console.log(ssafy.area);

// const num = [];
// console.log(num);
// num.push(10);
// console.log(num);

// let k = 10;
// for (let k = 0; k < 5; k++) {
//   console.log(k);
// }
// console.log(k);

function scope1() {
  var x = 11;
  if (true) {
    var x = 99;
    console.log(x);
  }
  console.log(x);
}
// scope1();

function scope2() {
  let x = 11;
  if (true) {
    let x = 99;
    console.log(x);
  }
  console.log(x);
}
scope2();

function scope3() {
  if (true) {
    var x = 99;
    console.log(x);
  }
  console.log(x);
}
// scope3();

function scope4() {
  let x = 99;
  if (true) {
    console.log(x);
  }
  console.log(x);
}
// scope4();

function scope5() {
  if (true) {
    let x = 99;
    console.log(x);
  }
  console.log(x);
}
// scope5();
