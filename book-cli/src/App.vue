<template>
  <div id="app">
    <the-header></the-header>
    <book-list-view></book-list-view>
    <book-create-view></book-create-view>
    <book-detail-view></book-detail-view>
    <book-update-view></book-update-view>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import BookListView from "./components/book/BookListView.vue";
import BookCreateView from "./components/book/BookCreateView.vue";
import BookDetailView from "./components/book/BookDetailView.vue";
import BookUpdateView from "./components/book/BookUpdateView.vue";
export default {
  components: {
    TheHeader,
    BookListView,
    BookCreateView,
    BookDetailView,
    BookUpdateView,
  },
};
</script>

BookListView
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a {
  text-decoration: none;
}
</style>
