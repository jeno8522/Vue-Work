<template>
  <div>
    <table class="table table-boardered">
      <tr>
        <td>책 번호</td>
        <!--ref:  Vue에서 form에 접근하기 위한 식별자    [사용방법] this.$refs.식별자 -->
        <td><input type="text" id="isbn" ref="isbn" v-model="book.isbn" /></td>
      </tr>
      <tr>
        <td>제목</td>
        <td><input type="text" id="title" ref="title" v-model="book.title" /></td>
      </tr>
      <tr>
        <td>저자</td>
        <td><input type="text" id="author" ref="author" v-model="book.author" /></td>
      </tr>
      <tr>
        <td>가격</td>
        <td><input type="text" id="price" ref="price" v-model="book.price" /></td>
      </tr>
      <tr>
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
      </tr>
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
      book: {
        isbn: "",
        title: "",
        author: "",
        price: "",
        describ: "",
      },
    };
  },
  methods: {
    moveHandler() {
      this.$router.push({ name: "BookListView" });
    },
    createHandler() {
      //데이타 검증
      let err = false;
      let msg = "";

      if (this.book.isbn == "") {
        err = true;
        msg = "책 번호를 입력해 주세요";
        // $refs : Vue 객체에서 DOM 객체에 접근 할 때
        this.$refs.isbn.focus();
      }

      if (!err && this.book.title == "") {
        err = true;
        msg = "제목을 입력해 주세요";
        this.$refs.title.focus();
      }

      if (!err && this.book.author == "") {
        err = true;
        msg = "저자를 입력해 주세요";
        this.$refs.author.focus();
      }

      if (!err && this.book.price == "") {
        err = true;
        msg = "가격을 입력해 주세요";
        this.$refs.price.focus();
      }

      if (err) {
        alert(msg);
      } else {
        //등록 처리
        //localStorage에 이미 저장된 책 목록이 있는지 검사
        const books = localStorage.getItem("books");

        let newBooks = {
          items: [],
        };
        if (books) {
          newBooks = JSON.parse(books);
        }

        newBooks.items.push({
          isbn: this.book.isbn,
          author: this.book.author,
          title: this.book.title,
          price: this.book.price,
          describ: this.book.describ,
        });
        //localStorage에 저장
        localStorage.setItem("books", JSON.stringify(newBooks));
        alert("등록 완료");
        this.moveHandler();
      }
    },
  },
};
</script>

<style scoped></style>
