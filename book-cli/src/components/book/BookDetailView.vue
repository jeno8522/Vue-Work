<template>
  <div>
    <div>
      <table class="table table-bordered">
        <tr>
          <th>책 번호</th>
          <td v-text="book.isbn"></td>
        </tr>
        <tr>
          <th>제목</th>
          <td v-text="book.title"></td>
        </tr>
        <tr>
          <th>저자</th>
          <td v-text="book.author"></td>
        </tr>
        <tr>
          <th>가격</th>
          <td v-text="book.price"></td>
        </tr>
        <tr>
          <th colspan="2">책 정보</th>
        </tr>
        <tr>
          <th colspan="2"><pre v-text="book.describ"></pre></th>
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
      isbn: "1",
      book: {},
    };
  },
  created() {
    console.log("view.html..................isbn:", this.isbn);
    //DOM객체와 연결되었고 Vue의 속성들도 초기화 된 상태
    const books = JSON.parse(localStorage.getItem("books"));
    console.log("view.html..................books]", books);
    for (let book of books.items) {
      if (book.isbn == this.isbn) {
        this.book = book;
        break;
      }
    }
  },
  methods: {
    moveHandler() {
      location.href = "List.html";
    },
    updateHandler() {
      location.href = `Modify.html?isbn=${this.isbn}`;
    },
    removeHandler() {
      const books = JSON.parse(localStorage.getItem("books"));

      books.items = books.items.filter((item) => {
        return this.isbn != item.isbn;
      });
      localStorage.setItem("books", JSON.stringify(books));
      alert("삭제 완료");
      this.moveHandler();
    },
  },
};
</script>

<style scoped></style>
