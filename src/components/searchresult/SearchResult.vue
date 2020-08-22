<template>
    <div class="shop-wrapper" style="margin-right: 5px;">
        <div class="d-flex" style="margin-top: -24px;">
            <div class="col-lg-5 col-md-4 d-none d-md-block pt-5 col-padding-12">
                <p class="mb-10 pt-20" style="font-size: 18px;">
                    <b class="text-capitalize"> Resultados para búsqueda</b>: {{ searchPattern }}
                </p>
            </div>
            <div v-if="hasResults" class="col-lg-7 col-md-8 col-sm-12">
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
        <div v-if="hasResults" class="d-flex mb-60">
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
                <paginator :totalPages="totalPages" :currentPage="currentPage" :page-handler="changePageCallback" />
                </div>
            </div>
            </div>
        </div>
        <div v-else class="d-flex mb-60">
            <div v-if="emptyPattern" style="width: 100%;">
                <no-search />
            </div>
            <div v-else style="width: 100%;">
                <no-results />
            </div>
        </div>
    </div>
</template>

<script>
import ProductCard from '../product/ProductCard.vue'
import Paginator from '../paginator/Paginator.vue'
import NoResults from './NoResults.vue'
import NoSearch from './NoSearch.vue'

export default {
    name: 'SearchResult',
    components: {
        ProductCard,
        Paginator,
        NoResults,
        NoSearch
    },
    props: [
        "totalPages",
        "currentPage",
        "products",
        "searchPattern",
        "changePageCallback"
    ],
    computed: {
        hasResults: function() {
            return this.products.length > 0;
        },
        emptyPattern: function() {
            return this.searchPattern.trim() === '';
        }
    }
}
</script>

<style scoped>
</style>
