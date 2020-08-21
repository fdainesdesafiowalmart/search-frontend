<template>
    <div class="pagination-wmt">
        <ul class="ais-Pagination-list">
            <li :class="['ais-Pagination-item ais-Pagination-item--previousPage', isFirstPage(currentPage) ? 'pagination-disabled-arrows':'']">
                <a tabindex="0" role="button" aria-disabled="true" @click="goToPage(currentPage-1)">&lt;</a>
            </li>
            <li v-for="page in parseInt(totalPages)" :key="page" 
                :class="['ais-Pagination-item ais-Pagination-item--page', isCurrentPage(page) ? 'ais-Pagination-item--selected':'']">
                <a role="button" class="ais-Pagination-link" @click="goToPage(page)">{{ page }}</a>
            </li>
            <li :class="['ais-Pagination-item ais-Pagination-item--nextPage', isLastPage(currentPage) ? 'pagination-disabled-arrows':'']">
                <a tabindex="0" role="button" aria-disabled="false" @click="goToPage(currentPage+1)">&gt;</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'Paginator',
  props: [
    "totalPages",
    "currentPage",
    "pageHandler"
  ],
  methods: {
      goToPage: function(page) {
          if(page<1) return;
          if(page>this.totalPages) return;
          this.pageHandler(page);
      },
      isFirstPage: function(page) {
          return page===1;
      },
      isLastPage: function(page) {
          return page===this.totalPages;
      },
      isCurrentPage: function(page) {
          return this.currentPage===page;
      }
  }
}
</script>

<style scoped>
</style>
