import { mount } from '@vue/test-utils'

import Home from '../Home.vue'

test('Home should renders', () => {
    const wrapper = mount(Home)

    expect(wrapper.find('#app').exists()).toBe(true)
})
