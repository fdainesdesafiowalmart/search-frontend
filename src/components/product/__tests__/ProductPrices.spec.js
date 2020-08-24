import { shallowMount } from '@vue/test-utils'

import ProductPrices from '../ProductPrices.vue'

test('ProductPrices should render discount and original price sections', () => {
    const wrapper = shallowMount(ProductPrices, {
        propsData: {
            productPrice: 12345,
            productDiscount: 40,
            originalPrice: 99999
        }
    })

    expect(wrapper.find('.walmart-discount-percentage-card').exists()).toBe(true)
    expect(wrapper.find('.walmart-reference-price').exists()).toBe(true)
})

test('ProductPrices should not render discount and original price sections', () => {
    const wrapper = shallowMount(ProductPrices, {
        propsData: {
            productPrice: 12345
        }
    })

    expect(wrapper.find('.walmart-discount-percentage-card').exists()).toBe(false)
    expect(wrapper.find('.walmart-reference-price').exists()).toBe(false)
})
