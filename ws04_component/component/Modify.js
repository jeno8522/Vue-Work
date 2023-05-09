//isbn을 url에서 추출하기
const params = new URL(document.location).searchParams;
const isbn = params.get("isbn");

export default {
  template: `
  <div>

<div>
  <table class="table table-bordered">
    <tr>
      <th>책 번호</th>
      <td><input type="text" id="isbn" ref="isbn" v-model="book.isbn"></td>
    </tr>
    <tr>
      <th>제목</th>
      <td><input type="text" id="title" ref="title" v-model="book.title"></td>
    </tr>
    <tr>
      <th>저자</th>
      <td><input type="text" id="author" ref="author" v-model="book.author"></td>
    </tr>
    <tr>
      <th>가격</th>
      <td><input type="text" id="price" ref="price" v-model="book.price"></td>
    </tr>
    <tr>
      <th colspan="2">책 정보</th>
    </tr>
    <tr>
      <td colspan="2">
        <textarea id="describ" cols="46" rows="10" ref="describ" v-model="book.describ"></textarea>
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
  `,
  data() {
    return {
      isbn,
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
      location.href = "List.html";
    },
    updateHandler() {
      //데이타 검증
      let err = false;
      let msg = "";
      !this.book.isbn &&
        ((msg = "책 번호를 입력해주세요"), (err = true), this.$refs.isbn.focus());
      !err & !this.book.title &&
        ((msg = "책 제목을 입력해주세요"), (err = true), this.$refs.title.focus());
      !err & !this.book.author &&
        ((msg = "책 제목을 입력해주세요"), (err = true), this.$refs.author.focus());
      !err & !this.book.price &&
        ((msg = "책 제목을 입력해주세요"), (err = true), this.$refs.price.focus());
      if (err) {
        alert(msg);
      } else {
        //수정하기
        const books = JSON.parse(localStorage.getItem("books"));
        for (let i = 0; i < books.items.length; i++) {
          if ((books.items[i].isbn = this.isbn)) {
            this.isbn = this.book.isbn;
            books.items[i] = {
              isbn: this.book.isbn,
              author: this.book.author,
              title: this.book.title,
              price: this.book.price,
              describ: this.book.describ,
            };
            break;
          }
        }
        localStorage.setItem("books", JSON.stringify(books));
        alert("수정 완료");
        location.href = `ViewPage.html?isbn=${this.isbn}`;
      }
    },
  },
}