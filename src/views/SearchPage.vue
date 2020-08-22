<template>
  <div class="app-container">
    <div class="rct-app-content">
      <div class="rct-page">
        <div class="content-wrapper">
          <div class="shop-wrapper">
            <div class="rct-page">
              <div class="rct-page-content">
                <div class="shop-wrapper">
                  <search-result 
                    :products="products" 
                    :search-pattern="searchPattern" 
                    :total-pages="totalPages" 
                    :current-page="currentPage" 
                    :change-page-callback="changePageHandler"
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { searchProducts } from '../clients/backend'
import SearchResult from '../components/searchresult/SearchResult'

export default {
  name: 'SearchPage',
  components: {
    SearchResult
  },
  methods: {
    searchForProducts: function(pattern, page) {
      const searchParams = {
        pattern: pattern,
        pageSize: 12,
        page: page
      }
      searchProducts(searchParams).then(result => {
        this.products = result.products
        this.totalPages = result.totalPages
        this.currentPage = page
      }).catch(() => {
        this.products = []
        this.totalPages = 0
        this.currentPage = 0
      })
    },
    changePageHandler: function(newPage) {
      this.searchForProducts(this.searchPattern, newPage);
    }
  },
  computed: {
    searchPattern() {
      return this.$store.state.searchPattern;
    },
  },
  watch: {
    searchPattern (newPattern) {
      this.searchForProducts(newPattern, 1);
    },
    currentPAge (newPage) {
      console.log("Page has changed to " + newPage)
    }
  },
  data() {
    return {
      totalPages: 0,
      currentPage: 0,
      products: []
    };
  }
}
</script>

<style scoped>
</style>
