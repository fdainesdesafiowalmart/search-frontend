<template>
    <div class="product-description d-flex text-left">
        <div>
            <span class="product-brand">{{ brand }}</span>
            <span> {{ description }}</span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ProductTitle',
  props: [
      "brand",
      "description"
  ]
}
</script>

<style scoped>
.product-brand {
    font-weight: bold;
    color: rgb(0, 0, 0);
}
.product-description {
    height: 65px;
}
</style>