<template>
  <div class="app-container">
    <div class="rct-app-content">
      <div class="rct-page">
        <div class="content-wrapper">
          <div class="shop-wrapper">
            <div class="rct-page">
              <div class="rct-page-content">
                <div class="shop-wrapper">
                  <search-result :products="products" :search-pattern="pattern" :total-pages="totalPages" :current-page="currentPage" />
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
import SearchResult from '../components/searchresult/SearchResult'

export default {
  name: 'SearchPage',
  components: {
    SearchResult
  },
  data() {
    return {
      pattern: 'HolaMundo',
      totalPages: 10,
      currentPage: 2,
      products: [
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
