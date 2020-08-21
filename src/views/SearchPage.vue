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
                              <li class="ais-Hits-item">
                                <div class="">
                                  <div class="rct-block  product-block flex-column justify-content-between overflow-hidden bg-white">
                                    <a href="/catalogo/product/sku/982651" style="text-decoration: none; height: 100%; display: inline; background-color: white;">
                                      <div id="982651" class="overlay-wrap overflow-hidden bg-white" style="display: flex; align-items: center; justify-content: center; max-height: 220px; width: 100%;">
                                        <div class="text-center">
                                          <div class="product-image-shadow"></div>
                                          <div class="d-flex labels-container"></div>
                                          <div class="d-flex cyber-lider-cards-container"></div>
                                          <div id="image" class="bg-white">
                                            <div>
                                              <img id="lazy-img" class="img-hover-zoom img-fluid m-auto " alt="Mademsa - Refrigerador Frío Directo 212 Litros /&nbsp;Nordik 2200" src="https://images.lider.cl/wmtcl?source=url[file:/productos/982651a.jpg]&amp;scale=size[300x300]&amp;&amp;sink" style="filter: unset; min-width: 50px; max-height: 220px;">
                                            </div>
                                          </div>
                                          <div></div>
                                        </div>
                                      </div>
                                      <div class=" product-info">
                                        <div class="d-flex text-left product-description  ">
                                          <div>
                                            <span class="" style="font-weight: bold; color: rgb(0, 0, 0);">PRODUCT_BRAND</span>
                                            <span> PRODUCT DESCRIPTION CAN BE VERY VERY VERY LARGE AND CONTINUES WRITING</span>
                                          </div>
                                        </div>
                                        <div class="mb-12">
                                          <div class="walmart-sales-price d-flex " style="display: flex; align-items: center;">
                                            $PRODUCT_PRICE
                                            <div class="walmart-discount-percentage-card" style="margin-top: 1px; margin-left: 6px;">DISCOUNT%</div>
                                          </div>
                                          <div class="d-flex">
                                            <span class="walmart-reference-price">$ORIGINAL_PRICE</span>
                                          </div>
                                        </div>
                                        <div>
                                          <div class="walmart-add-cart-button-container" style="justify-content: center; width: 95%;">
                                            <span id="addProductToCart" class="ProductCardButton__AddToCartButton-sc-1r8ezq4-0 iRLHuO walmart-add-cart-button pt-5 text-center cp-no-select">Agregar</span>
                                          </div>
                                          <div class="walmart-add-cart-button-container-alert"></div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                </div>
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
export default {
  name: 'SearchPage'
}
</script>

<style scoped>
</style>
