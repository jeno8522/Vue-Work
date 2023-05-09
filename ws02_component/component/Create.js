export default {
  template: `
        <div>
        
        <div class="mt-4 p-5 bg-light text-white rounded">
        <img class="img-thumbnail" src="./img/ssafy_logo.png" />
        <span class="text-dark"> 도서관리 </span>
      </div>
      <nav class="navbar navbar-expand-sm bg-light">
        <div class="container-fluid">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="Create.html">도서 등록</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="List.html">도서 목록</a>
            </li>
          </ul>
        </div>
      </nav>
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
            <td colspan="2" ref="describ">책 정보</td>
          </tr>
          <tr>
            <td colspan="2">
              <textarea id="describ" cols="46" rows="10" v-model="book.describ"></textarea>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <div class="text-center">
                <button class="btn btn-primary" @click="regist">등록</button>
                <button class="btn btn-primary">목록</button>
              </div>
            </td>
          </tr>
        </table>
      </div>
        
        </div>
  
    `,

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
    //호출하면 항상 수행되는 기능들을 methods에 선언한다. ==> 이벤트 처리
    regist() {
      //데이터 검증
      let err = false;
      let msg = "";

      if (this.book.isbn == "") {
        err = true;
        msg = "책 번호를 입력해 주세요";
        this.$refs.isbn.focus();
      }

      if (!err && this.book.title == "") {
        err = true;
        msg = "책 제목을 입력해 주세요";
        this.$refs.title.focus();
      }

      if (!err && this.book.author == "") {
        err = true;
        msg = "책 저자를 입력해 주세요";
        this.$refs.author.focus();
      }

      if (err) {
        alert(msg);
      } else {
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

        localStorage.setItem("books", JSON.stringify(newBooks));
        alert("등록 완료!");
        this.moveHandler();
      }
    },

    moveHandler() {
      location.href = "List.html";
    },
  },
};
