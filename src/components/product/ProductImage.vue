<template>
  <div class="text-center">
    <div class="product-image-shadow"></div>
    <div class="d-flex labels-container"></div>
    <div class="d-flex cyber-lider-cards-container"></div>
    <div id="image" class="bg-white">
      <div>
        <img 
          class="product-image img-hover-zoom img-fluid m-auto" 
          alt="noImage" 
          :src="resolveImageUrl(image)" />
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'ProductImage',
  props: [
    "image"
  ],
  methods: {
    resolveImageUrl: function(imageSrc) {
      if(imageSrc && imageSrc.startsWith('http')) return imageSrc;

      return `https://${imageSrc}`;
    }
  }
}
</script>

<style scoped>
.product-image {
  filter: unset; 
  min-width: 220px; 
  max-height: 220px;
}
</style>