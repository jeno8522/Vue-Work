export default {
  template: `
    <div>
    <div v-if="books.length>0">
    <table class="table table-bordered">
      <colgroup>
        <col width="10%" />
        <col width="50%" />
        <col width="15%" />
        <col width="25%" />
      </colgroup>
      <tr>
        <th>책 번호</th>
        <th>제목</th>
        <th>저자</th>
        <th>가격</th>
      </tr>
      <tr v-for="(book, index) in books" :key="book.isbn">
        <td>{{book.isbn}}</td>
        <td>
          <a :href="'View.html?isbn='+book.isbn">{{book.title}}</a>
        </td>
        <td v-text="book.author"></td>
        <td v-text="book.price"></td>
      </tr>
    </table>
  </div>
  <div v-else>등록된 책 목록이 없습니다.</div>
</div>
    
    </div>
    
    `,

  data() {
    return {
      books: [],
    };
  },
  created() {
    //Vue 객체가 생성되고 Vue 속성들이 초기화 된 상태
    // localStorage에 저장된 책 정보를 추출
    const books = localStorage.getItem("books");
    let newBooks = {
      items: [],
    };

    if (books) {
      newBooks = JSON.parse(books);
      newBooks.items.sort((a, b) => {
        return a.isbn - b.isbn;
      });
    } else {
      localStorage.setItem("books", JSON.stringify(newBooks));
    }

    // Vue 객체의 속성에 접근하는 방법 : this.$속성명, data는 생략헤서 사용할 수 있다. (다른 속성들은 안됨)
    //                            this.$data.books  = this.books
    this.books = newBooks.items;
  },
};
