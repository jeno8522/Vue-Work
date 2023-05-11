<template>
  <div>
    <div v-if="emps.length > 0">
      <table class="table table-bordered">
        <colgroup>
          <col width="10%" />
          <col width="50%" />
          <col width="15%" />
          <col width="25%" />
        </colgroup>
        <tr>
          <th>empno</th>
          <th>name</th>
          <th>email</th>
          <th>hire_date</th>
          <th>job</th>
          <th>salary</th>
          <th>deptno</th>
        </tr>
        <tr v-for="emp in emps" :key="emp.empno">
          <td>{{ emp.empno }}</td>
          <td>
            <router-link :to="{ name: 'EmpDetailView', query: { empno: emp.empno } }">{{
              emp.name
            }}</router-link>
          </td>
          <td v-text="emp.email"></td>
          <td v-text="emp.hire_date"></td>
          <td v-text="emp.job"></td>
          <td v-text="emp.salary"></td>
          <td v-text="emp.deptno"></td>
        </tr>
      </table>
    </div>
    <div v-else>
      <table class="table table-hover">
        <tr>
          <td>등록된 데이타가 없습니다.</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { emps: [] };
  },
  created() {
    //Vue  객체가 생성되고 Vue 속성들이 초기화 된 상태
    //localStorage에 저장된 책 정보를 추출
    const emps = localStorage.getItem("emps");
    // let tmp = {
    //   empno: "11",
    //   name: "11",
    //   email: "11",
    //   hire_date: "11",
    //   job: "11",
    //   salary: "11",
    //   deptno: "11",
    // };
    let newEmps = {
      items: [],
    };
    if (emps) {
      newEmps = JSON.parse(emps);
      newEmps.items.sort((a, b) => {
        return a.empno - b.empno;
      });
    } else {
      localStorage.setItem("emps", JSON.stringify(newEmps));
    }

    //Vue 객체의 속성에 접근 방법 : this.$속성명 ,  data는 생략해서 사용할 수 있다.
    // this.#data.books ==> this.books
    //this는 빼먹으면 안 돼
    // newEmps.items.push(tmp);
    this.emps = newEmps.items;
  },
};
</script>

<style scoped></style>
