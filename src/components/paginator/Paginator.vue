<template>
    <div class="pagination-wmt">
        <ul class="ais-Pagination-list">
            <li :class="['ais-Pagination-item ais-Pagination-item--previousPage', isFirstPage(currentPage) ? 'pagination-disabled-arrows':'']">
                <a tabindex="0" role="button" aria-disabled="true">&lt;</a>
            </li>
            <li v-for="page in parseInt(totalPages)" :key="page" 
                :class="['ais-Pagination-item ais-Pagination-item--page', isCurrentPage(page) ? 'ais-Pagination-item--selected':'']">
                <a role="button" class="ais-Pagination-link">{{ page }}</a>
            </li>
            <li :class="['ais-Pagination-item ais-Pagination-item--nextPage', isLastPage(currentPage) ? 'pagination-disabled-arrows':'']">
                <a tabindex="0" role="button" aria-disabled="false">&gt;</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'Paginator',
  props: [
    "totalPages",
    "currentPage"
  ],
  methods: {
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
