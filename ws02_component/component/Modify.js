export default {
  template: `
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
        <th colspan="2" ref="describ" v-model="book.describ">책 정보</th>
      </tr>
      <tr>
        <td colspan="2">
          <textarea id="describ" cols="46" rows="10"></textarea>
        </td>
      </tr>
      <tr>
        <td>
          <button class="btn btn-primary" @click="updateHandler">수정</button>
          <button class="btn btn-primary" @click="moveHandler">목록</button>
        </td>
      </tr>
    </table>
  </div>
  
    `,
  props: ["isbn"],
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
  created() {
    const books = JSON.parse(localStorage.getItem("books"));
    for (let book of books.items) {
      if (book.isbn == this.isbn) {
        this.book = book;
        break;
      }
    }
  },
  methods: {
    updateHandler() {
      const books = JSON.parse(localStorage.getItem("books"));
      for (let book of books.items) {
        if (book.isbn == this.isbn) {
          book.isbn = this.book.isbn;
          book.title = this.book.title;
          book.author = this.book.author;
          book.price = this.book.price;
          book.describ = this.book.describ;
          break;
        }
      }
      localStorage.setItem("books", JSON.stringify(books));
      this.moveHandler();
    },
    moveHandler() {
      location.href = "List.html";
    },
  },
};
