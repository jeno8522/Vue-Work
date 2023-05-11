<template>
  <div>
    <div>
      <table class="table table-bordered">
        <tr>
          <th>사원 번호</th>
          <td v-text="emp.empno"></td>
        </tr>
        <tr>
          <th>사원 이름</th>
          <td v-text="emp.name"></td>
        </tr>
        <tr>
          <th>사원 이메일</th>
          <td v-text="emp.email"></td>
        </tr>
        <tr>
          <th>사원 입사일</th>
          <td v-text="emp.hire_date"></td>
        </tr>
        <tr>
          <th>사원 직무</th>
          <td v-text="emp.job"></td>
        </tr>
        <tr>
          <th>사원 급여</th>
          <td v-text="emp.salary"></td>
        </tr>
        <tr>
          <th>사원 부서</th>
          <td v-text="emp.deptno"></td>
        </tr>

        <tr>
          <td>
            <div>
              <button class="btn btn-primary" @click="moveHandler">목록</button>
              <button class="btn btn-primary" @click="updateHandler">수정</button>
              <button class="btn btn-primary" @click="removeHandler">삭제</button>
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      empno: "",
      emp: {},
    };
  },
  created() {
    this.empno = this.$route.query.empno;
    console.log("view.html..................empno:", this.empno);
    //DOM객체와 연결되었고 Vue의 속성들도 초기화 된 상태
    const emps = JSON.parse(localStorage.getItem("emps"));
    console.log("view.html..................emps]", emps);
    for (let emp of emps.items) {
      if (emp.empno == this.empno) {
        this.emp = emp;
        break;
      }
    }
  },
  methods: {
    moveHandler() {
      this.$router.push({ name: "EmpListView" });
    },
    updateHandler() {
      this.$router.push({ name: "EmpUpdateView", params: { empno: this.empno } });
    },
    removeHandler() {
      const emps = JSON.parse(localStorage.getItem("emps"));

      emps.items = emps.items.filter((item) => {
        return this.empno != item.empno;
      });
      localStorage.setItem("emps", JSON.stringify(emps));
      alert("삭제 완료");
      this.moveHandler();
    },
  },
};
</script>

<style scoped></style>
