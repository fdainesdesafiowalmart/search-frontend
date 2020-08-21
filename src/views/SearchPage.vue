<template>
  <div class="app-container">
    <div class="rct-app-content">
      <div class="rct-page">
        <div class="content-wrapper">
          <div class="shop-wrapper">
            <div class="rct-page">
              <div class="rct-page-content">
                <div class="shop-wrapper">
                  <search-result :products="products" :search-pattern="searchPattern" :total-pages="totalPages" :current-page="currentPage" />
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
  computed: {
    searchPattern() {
      return this.$store.state.searchPattern;
    },
    products() {
      return this.products2;
//      return this.$store.state.products;
    },
    currentPage() {
      return this.currentPage2;
//      return this.$store.state.searchPattern;
    },
    totalPages() {
      return this.totalPages2;
//      return this.$store.state.searchPattern;
    }
  },
  watch: {
    searchPattern (newPattern, oldPattern) {
      console.log("Search pattern has changed from '"+oldPattern+"' to '"+newPattern+"'");
      searchProducts({ pattern: this.searchPattern }).then(result => {
        this.products2 = result.products
      });
    }
  },
  data() {
    return {
      totalPages2: 10,
      currentPage2: 2,
      products2: [
        {
          brand: 'Marca X',
          description: 'descripcion del producto ofrecido',
          image: 'www.lider.cl/catalogo/images/whiteLineIcon.svg',
          price: 123456,
          discount: 50,
          originalPrice: 999999
        },
        {
          brand: 'Marca Y',
          description: 'descripcion del producto ofrecido, eventualmente la descripcion podria ser demasiado larga para la tarjeta e producto',
          image: 'www.lider.cl/catalogo/images/homeIcon.svg',
          price: 436455
        },
        {
          brand: 'Marca Y',
          description: 'descripcion del producto ofrecido, eventualmente la descripcion podria ser demasiado larga para la tarjeta e producto',
          image: 'www.lider.cl/catalogo/images/homeIcon.svg',
          price: 436455
        },
        {
          brand: 'Marca Y',
          description: 'descripcion del producto ofrecido, eventualmente la descripcion podria ser demasiado larga para la tarjeta e producto',
          image: 'www.lider.cl/catalogo/images/whiteLineIcon.svg',
          price: 436455
        },
        {
          brand: 'Marca Y',
          description: 'descripcion del producto ofrecido, eventualmente la descripcion podria ser demasiado larga para la tarjeta e producto',
          image: 'www.lider.cl/catalogo/images/homeIcon.svg',
          price: 4036455
        },
        {
          brand: 'Marca Y',
          description: 'descripcion del producto ofrecido, eventualmente la descripcion podria ser demasiado larga para la tarjeta e producto',
          image: 'www.lider.cl/catalogo/images/whiteLineIcon.svg',
          price: '023455'
        }
      ]
    };
  }
}
</script>

<style scoped>
</style>
