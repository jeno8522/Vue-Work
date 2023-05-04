var a = { name: "John" };
var b = a;
b.name = "Mike";

console.log(a.name); // 출력: "Mike"
console.log(b.name); // 출력: "Mike"
