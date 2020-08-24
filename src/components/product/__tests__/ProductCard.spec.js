import { shallowMount } from '@vue/test-utils'

import ProductCard from '../ProductCard.vue'
import ProductImage from '../ProductImage.vue'
import ProductPrices from '../ProductPrices.vue'
import ProductSelection from '../ProductSelection.vue'

test('ProductCard should render image, prices and selection sections', () => {
    const wrapper = shallowMount(ProductCard, {
        propsData: {
            product: {
                brand: 'foo',
                description: 'bar',
                price: 12345,
                discount: 34,
                originalPrice: 999999
            }
        }
    })

    const image = wrapper.findComponent(ProductImage)
    expect(image.exists()).toBe(true)
    const prices = wrapper.findComponent(ProductPrices)
    expect(prices.exists()).toBe(true)
    const selection = wrapper.findComponent(ProductSelection)
    expect(selection.exists()).toBe(true)
})
