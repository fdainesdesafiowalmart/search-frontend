import { shallowMount } from '@vue/test-utils'

import ProductImage from '../ProductImage.vue'

test('ProductImage', () => {
    const wrapper = shallowMount(ProductImage, {
        propsData: {
            image: 'foobar'
        }
    })

    expect(wrapper.find('.product-image').exists()).toBe(true)
    expect(wrapper.find('.product-image').attributes('src')).toBe('https://foobar')
})
