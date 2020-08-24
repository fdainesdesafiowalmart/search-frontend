import { shallowMount } from '@vue/test-utils'

import Header from '../Header.vue'

test('Header should renders', () => {
    const wrapper = shallowMount(Header)

    expect(wrapper.find('.header-info').exists()).toBe(true)
})
