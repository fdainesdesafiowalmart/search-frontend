import { shallowMount } from '@vue/test-utils'

import SearchBar from '../SearchBar.vue'

test('SearchBar should render at expected', () => {
    const wrapper = shallowMount(SearchBar, {
        propsData: {
        }
    })

    expect(wrapper.find('.search-box-container-header').exists()).toBe(true)
})

test('SearchBar: should send search pattern to callbach handler', async () => {
    const searchHandler = jest.fn();

    const wrapper = shallowMount(SearchBar, {
        propsData: {
            searchCallback: searchHandler
        }
    })
    wrapper.setData({ searchPattern: 'foobar' })


    const button = wrapper.find('form')
    await button.trigger('submit')

    expect(searchHandler).toHaveBeenCalledWith('foobar')
})