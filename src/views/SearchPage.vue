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
                                <ProductCard :product="product" />
                              </li>
                            </ul>
                          </div>
                          <div class="pagination-container">
                            <div class="pagination-wmt">
                              <ul class="ais-Pagination-list">
                                <li class="ais-Pagination-item ais-Pagination-item--previousPage pagination-disabled-arrows">
                                  <a tabindex="0" role="button" aria-disabled="true">&lt;</a>
                                </li>
                                <li class="ais-Pagination-item ais-Pagination-item--page ais-Pagination-item--selected">
                                  <a role="button" class="ais-Pagination-link" tabindex="0" aria-label="Page 1 is your current page" aria-current="page">1</a>
                                </li>
                                <li class="ais-Pagination-item ais-Pagination-item--page">
                                  <a role="button" class="ais-Pagination-link" tabindex="0" aria-label="Page 2">2</a>
                                </li>
                                <li class="ais-Pagination-item ais-Pagination-item--page">
                                  <a role="button" class="ais-Pagination-link" tabindex="0" aria-label="Page 3">3</a>
                                </li>
                                <li class="ais-Pagination-item ais-Pagination-item--page">
                                  <a role="button" class="ais-Pagination-link" tabindex="0" aria-label="Page 4">4</a>
                                </li>
                                <li class="ais-Pagination-item ais-Pagination-item--nextPage">
                                  <a tabindex="0" role="button" aria-disabled="false">&gt;</a>
                                </li>
                              </ul>
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
  </div>
</template>

<script>
import ProductCard from '../components/product/ProductCard.vue'

export default {
  name: 'SearchPage',
  components: {
    ProductCard
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
          price: 436455
        },
        {
          brand: 'Marca Y',
          description: 'descripcion del producto ofrecido, eventualmente la descripcion podria ser demasiado larga para la tarjeta e producto',
          image: 'www.lider.cl/catalogo/images/whiteLineIcon.svg',
          price: 436455
        }
      ]
    };
  }
}
</script>

<style scoped>
</style>
