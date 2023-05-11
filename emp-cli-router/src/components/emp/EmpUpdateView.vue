<template>
  <div>
    <div>
      <table class="table table-bordered">
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
          <th colspan="2">책 정보</th>
        </tr>
        <tr>
          <td colspan="2">
            <textarea
              id="describ"
              cols="46"
              rows="10"
              ref="describ"
              v-model="emp.describ"
            ></textarea>
          </td>
        </tr> -->
        <tr>
          <td>
            <div>
              <button class="btn btn-primary" @click="updateHandler">수정</button>
              <button class="btn btn-primary" @click="moveHandler">목록</button>
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
  created() {
    //DOM객체와 연결되었고 Vue의 속성들도 초기화 된 상태
    this.empno = this.$route.params.empno;
    const emps = JSON.parse(localStorage.getItem("emps"));
    console.log("Modify.html..................emps]", emps);
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
      const emps = JSON.parse(localStorage.getItem("emps"));
      for (let emp of emps.items) {
        if (emp.empno == this.empno) {
          emp.empno == this.empno;
          emp.name = this.emp.name;
          emp.email = this.emp.email;
          emp.hire_date = this.emp.hire_date;
          emp.job = this.emp.job;
          emp.salary = this.emp.salary;
          emp.deptno = this.emp.deptno;
          break;
        }
      }

      console.log(emps);
      localStorage.setItem("emps", JSON.stringify(emps));
      alert("수정완료!!");
      this.moveHandler();
    },
  },
};
</script>

<style scoped></style>
