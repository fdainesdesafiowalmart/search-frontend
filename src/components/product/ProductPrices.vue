<template>
    <div class="mb-12">
        <div class="walmart-sales-price d-flex">
            ${{ productPrice }}
            <div v-if="hasDiscount" class="walmart-discount-percentage-card">{{ productDiscount }}%</div>
        </div>
        <div class="d-flex">
            <span v-if="hasDiscount" class="walmart-reference-price">${{ originalPrice }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductPrices',
    props: [
        "productPrice",
        "productDiscount",
        "originalPrice"
    ],
    computed: {
        hasDiscount: function() {
            return this.productDiscount > 0;
        }
    }
}
</script>

<style scoped>
.walmart-sales-price {
    display: flex;
    align-items: center;
}

.walmart-reference-price {
    margin-top: 1px;
    margin-left: 6px;
}

.walmart-discount-percentage-card {
    width: 50px;
    margin-left: 10px;
    padding-left: 5px;
    padding-right: 5px;
}
</style>