<template>
    <div>
        <div class="dropdown">
            <div class="dropdown">
                <div class="category-order-dropdown" @click="selectSortCriteria">
                    Ordenar por: {{sortCriteriaDescription}}
                    <span class="pull-right">
                        <img alt="open-arrow" width="5" src="https://www.lider.cl/catalogo/images/arrow_mobile.svg">
                    </span>
                </div>
                <div v-if="showOptions" class="sort-by-margin-left dropdown-menu">
                    <div class="category-order-dropdown-item" @click="select('id')">Destacados</div>
                    <div class="category-order-dropdown-item" @click="select('price')">Menor precio</div>
                    <div class="category-order-dropdown-item" @click="select('brand')">Marca</div>
                    <div class="category-order-dropdown-item" @click="select('description')" style="padding-bottom: 8px; border-radius: 0.25rem;">Descripción</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const sortCriterias = {
    id: 'Destacados',
    price: 'Menor precio',
    brand: 'Marca',
    description: 'Descripción'
}

export default {
  name: 'SortCriteria',
  props: [
      'onCriteriaChanged'
  ],
  data() {
      return {
          showOptions: false,
          currentSortCriteria: 'id'
      }
  },
  methods: {
    selectSortCriteria() {
        this.showOptions = true;
    },
    select(criteria) {
        this.showOptions = false;
        this.currentSortCriteria = criteria;
        this.onCriteriaChanged(criteria);
    }
  },
  computed: {
      sortCriteriaDescription() {
          return sortCriterias[this.currentSortCriteria]
      }
  }
}
</script>

<style scoped>
.sort-by-margin-left {
    left: unset !important;
    right: 0px !important;
    display: inline !important;
    transform: translate3d(0px,-10px,0px) !important;
}
</style>
