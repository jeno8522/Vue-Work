<template>
  <div>
    <div>
      <table class="table table-bordered">
        <tr>
          <th>책 번호</th>
          <td><input type="text" id="isbn" ref="isbn" v-model="book.isbn" /></td>
        </tr>
        <tr>
          <th>제목</th>
          <td><input type="text" id="title" ref="title" v-model="book.title" /></td>
        </tr>
        <tr>
          <th>저자</th>
          <td><input type="text" id="author" ref="author" v-model="book.author" /></td>
        </tr>
        <tr>
          <th>가격</th>
          <td><input type="text" id="price" ref="price" v-model="book.price" /></td>
        </tr>
        <tr>
          <th colspan="2">책 정보</th>
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
      isbn: "",
      book: {
        isbn: "",
        title: "",
        author: "",
        price: "",
        describ: "",
      },
    };
  },
  created() {
    //DOM객체와 연결되었고 Vue의 속성들도 초기화 된 상태
    this.isbn = this.$route.params.isbn;
    const books = JSON.parse(localStorage.getItem("books"));
    console.log("Modify.html..................books]", books);
    for (let book of books.items) {
      if (book.isbn == this.isbn) {
        this.book = book;
        break;
      }
    }
  },
  methods: {
    moveHandler() {
      this.$router.push({ name: "BookListView" });
    },
    updateHandler() {
      const books = JSON.parse(localStorage.getItem("books"));
      for (let book of books.items) {
        if (book.isbn == this.isbn) {
          book.isbn == this.isbn;
          book.title = this.book.title;
          book.author = this.book.author;
          book.price = this.book.price;
          book.describ = this.book.describ;
          break;
        }
      }

      console.log(books);
      localStorage.setItem("books", JSON.stringify(books));
      alert("수정완료!!");
      this.moveHandler();
    },
  },
};
</script>

<style scoped></style>
