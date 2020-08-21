<template>
  <div class="app-container">
    <div class="rct-app-content">
      <div class="rct-page">
        <div class="content-wrapper">
          <div class="shop-wrapper">
            <div class="rct-page">
              <div class="rct-page-content">
                <div class="shop-wrapper">
                  <div class="shop-wrapper" style="margin-right: 5px;">
                    <div class="d-flex" style="margin-top: -24px;">
                      <div class="col-lg-5 col-md-4 d-none d-md-block pt-5 col-padding-12">
                        <p class="mb-10 pt-20" style="font-size: 18px;">
                          <b class="text-capitalize"> Resultados para búsqueda</b>: SEARCH_PATTERN
                        </p>
                      </div>
                      <div class="col-lg-7 col-md-8 col-sm-12">
                        <div>
                          <div class="dropdown">
                            <div class="dropdown">
                              <div data-toggle="dropdown" aria-expanded="false" aria-haspopup="true" class="category-order-dropdown">
                                Ordenar por: precio
                                <span class="pull-right">
                                  <img alt="open-arrow" width="5" src="https://www.lider.cl/catalogo/images/arrow_mobile.svg">
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="d-flex mb-60">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-padding-12">
                        <div class="shop-content">
                          <div style="" class="ais-Hits">
                            <ul class="ais-Hits-list">
                              <li v-for="(product, index) in products" :key="index" class="ais-Hits-item">
                                <product-card :product="product" />
                              </li>
                            </ul>
                          </div>
                          <div class="pagination-container">
                            <paginator :totalPages="5" :currentPage="2" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
import ProductCard from '../components/product/ProductCard.vue'
import Paginator from '../components/paginator/Paginator.vue'

export default {
  name: 'SearchPage',
  components: {
    ProductCard,
    Paginator
  },
  data() {
    return {
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
