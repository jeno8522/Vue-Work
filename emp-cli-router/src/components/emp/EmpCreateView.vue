<template>
  <div>
    <table class="table table-boardered">
      <tr>
        <td>사원 번호</td>
        <!--ref:  Vue에서 form에 접근하기 위한 식별자    [사용방법] this.$refs.식별자 -->
        <td><input type="text" id="empno" ref="empno" v-model="emp.empno" /></td>
      </tr>
      <tr>
        <td>이름</td>
        <!--ref:  Vue에서 form에 접근하기 위한 식별자    [사용방법] this.$refs.식별자 -->
        <td><input type="text" id="name" ref="name" v-model="emp.name" /></td>
      </tr>
      <tr>
        <td>이메일</td>
        <!--ref:  Vue에서 form에 접근하기 위한 식별자    [사용방법] this.$refs.식별자 -->
        <td><input type="text" id="email" ref="email" v-model="emp.email" /></td>
      </tr>
      <tr>
        <td>입사일</td>
        <!--ref:  Vue에서 form에 접근하기 위한 식별자    [사용방법] this.$refs.식별자 -->
        <td><input type="text" id="hire_date" ref="hire_date" v-model="emp.hire_date" /></td>
      </tr>
      <tr>
        <td>직무</td>
        <!--ref:  Vue에서 form에 접근하기 위한 식별자    [사용방법] this.$refs.식별자 -->
        <td><input type="text" id="job" ref="job" v-model="emp.job" /></td>
      </tr>
      <tr>
        <td>급여</td>
        <!--ref:  Vue에서 form에 접근하기 위한 식별자    [사용방법] this.$refs.식별자 -->
        <td><input type="text" id="salary" ref="salary" v-model="emp.salary" /></td>
      </tr>
      <tr>
        <td>부서</td>
        <!--ref:  Vue에서 form에 접근하기 위한 식별자    [사용방법] this.$refs.식별자 -->
        <td><input type="text" id="deptno" ref="deptno" v-model="emp.deptno" /></td>
      </tr>

      <!-- <tr>
        <td colspan="2">책 정보</td>
      </tr>
      <tr>
        <td colspan="2">
          <textarea
            id="describ"
            cols="46"
            rows="10"
            ref="describ"
            v-model="book.describ"
          ></textarea>
        </td>
      </tr> -->
      <tr>
        <td colspan="2">
          <div class="text-center">
            <button class="btn btn-primary" @click="createHandler">등록</button>
            <button class="btn btn-primary" @click="moveHandler">목록</button>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      emp: {
        empno: "",
        name: "",
        email: "",
        hire_date: "",
        job: "",
        salary: "",
        deptno: "",
      },
    };
  },
  methods: {
    moveHandler() {
      this.$router.push({ name: "EmpListView" });
    },
    createHandler() {
      //데이타 검증
      let err = false;
      let msg = "";

      if (this.emp.empno == "") {
        err = true;
        msg = "직원 번호를 입력해 주세요";
        // $refs : Vue 객체에서 DOM 객체에 접근 할 때
        this.$refs.empno.focus();
      }

      if (err) {
        alert(msg);
      } else {
        //등록 처리
        //localStorage에 이미 저장된 책 목록이 있는지 검사
        const emps = localStorage.getItem("emps");

        let newEmps = {
          items: [],
        };
        if (emps) {
          newEmps = JSON.parse(emps);
        }
        console.log(this.emp);
        newEmps.items.push({
          empno: this.emp.empno,
          name: this.emp.name,
          email: this.emp.email,
          hire_date: this.emp.hire_date,
          job: this.emp.job,
          salary: this.emp.salary,
          deptno: this.emp.deptno,
        });
        console.log(newEmps.items);
        //localStorage에 저장
        localStorage.setItem("emps", JSON.stringify(newEmps));
        alert("등록 완료");
        this.moveHandler();
      }
    },
  },
};
</script>

<style scoped></style>
