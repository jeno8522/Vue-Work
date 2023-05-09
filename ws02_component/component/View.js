export default {
  template: `
      <div>
        <table class="table table-bordered">
          <tr>
            <th>책 번호</th>
            <td>{{book.isbn}}</td>
          </tr>
          <tr>
            <th>제목</th>
            <td>{{book.title}}</td>
          </tr>
          <tr>
            <th>저자</th>
            <td>{{book.author}}</td>
          </tr>
          <tr>
            <th>가격</th>
            <td>{{book.price}}</td>
          </tr>
          <tr>
            <th colspan="2">책 정보</th>
          </tr>
          <tr>
            <th colspan="2" v-text="book.describ"></th>
          </tr>
          <tr>
            <td>
              <button class="btn btn-primary" @click="moveHandler">목록</button>
              <button class="btn btn-primary" @click="updateHandler">수정</button>
              <button class="btn btn-primary" @click="removeHandler">삭제</button>
            </td>
          </tr>
        </table>
      </div>
  
    `,

  props: ["isbn"],
  data() {
    return {
      isbn,
      book: {},
    };
  },
  created() {
    const books = JSON.parse(localStorage.getItem("books"));
    // const books = localStorage.getItem("books");
    console.log(this.isbn);
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
      books.items = books.items.filter((item) => this.isbn != item.isbn);
      localStorage.setItem("books", JSON.stringify(books));
      alert("삭제 완료!!");
      this.moveHandler();
    },
  },
};
