export default {
  template: `
  <div>
    <div v-if="books.length>0">
      <table class="table table-bordered">
        <colgroup>
          <col  width="10%">
          <col  width="50%">
          <col  width="15%">
          <col  width="25%">
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
            <a :href="'View.html?isbn='+book.isbn"> {{book.title}}</a>
          </td>
          <td v-text="book.author"></td>
          <td v-text="book.price"></td>
        </tr>
      </table>
    </div>
    <div v-else>
        등록된 책 목록이 없습니다.
    </div>
  </div>
  `,
  data() {
    return {  books:[]  }
  },
  created() {     //DOM객체와 연결되었고 Vue의 속성들도 초기화 된 상태 
    const books = localStorage.getItem('books');

    let newBooks={
      items:[]
    }
    if(books){
      newBooks = JSON.parse(books);
      newBooks.items.sort((a, b) => { return  b.isbn-a.isbn  })
    } else{
      localStorage.setItem('books', JSON.stringify(newBooks))
    }

    this.books = newBooks.items;
  },
}