export default {
  template: `
    <div>
    <div>이름 : {{ member.name }}</div>
    <div>나이 : {{ member.age }}</div>
    <div>이메일 : {{ member.email }}</div>
  </div>
    `,

  props: ["member"],
};
