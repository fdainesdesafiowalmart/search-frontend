<template>
  <div>
    <div class="rct-block product-block flex-column justify-content-between overflow-hidden bg-white">
      <div class="product-image overlay-wrap overflow-hidden bg-white" style="">
        <Product-image :image="product.image" />
      </div>
      <div class="product-info">
        <Product-title :brand="product.brand" :description="product.description" />
        <Product-prices :productPrice="product.price" :productDiscount="product.discount" :originalPrice="product.originalPrice" />
        <Product-selection />
      </div>
    </div>
  </div>
</template>

<script>
import ProductTitle from './ProductTitle.vue'
import ProductPrices from './ProductPrices.vue'
import ProductImage from './ProductImage.vue'
import ProductSelection from './ProductSelection.vue'

export default {
  name: 'ProductCard',
  components: {
    ProductTitle,
    ProductPrices,
    ProductImage,
    ProductSelection
  },
  props: [
    "product"
  ]
}
</script>

<style scoped>
.product-image {
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 220px;
  width: 100%;
}
</style>
