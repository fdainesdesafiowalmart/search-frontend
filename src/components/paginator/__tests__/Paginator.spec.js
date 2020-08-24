import { shallowMount } from '@vue/test-utils'

import Paginator from '../Paginator.vue'

test('Paginator should render list of pages', () => {
    const wrapper = shallowMount(Paginator, {
        propsData: {
            totalPages: 10,
            currentPage: 2
        }
    })

    expect(wrapper.find('.ais-Pagination-list').exists()).toBe(true)
    expect(wrapper.findAll('.ais-Pagination-item').length).toBe(12)
})

test('Paginator: Prev page should call page handler with expected page', async () => {
    const pageHandler = jest.fn();

    const wrapper = shallowMount(Paginator, {
        propsData: {
            totalPages: 10,
            currentPage: 3,
            pageHandler: pageHandler
        }
    })

    const button = wrapper.find('.ais-Pagination-item--previousPage > a')
    await button.trigger('click')

    expect(pageHandler).toHaveBeenCalledWith(2)
})

test('Paginator: Next page should call page handler with expected page', async () => {
    const pageHandler = jest.fn();

    const wrapper = shallowMount(Paginator, {
        propsData: {
            totalPages: 10,
            currentPage: 3,
            pageHandler: pageHandler
        }
    })

    const button = wrapper.find('.ais-Pagination-item--nextPage > a')
    await button.trigger('click')

    expect(pageHandler).toHaveBeenCalledWith(4)
})

test('Paginator: Select Page should call page handler with expected page', async () => {
    const pageHandler = jest.fn();

    const wrapper = shallowMount(Paginator, {
        propsData: {
            totalPages: 10,
            currentPage: 3,
            pageHandler: pageHandler
        }
    })

    const button = wrapper.findAll('.ais-Pagination-item--page > a').at(5)
    await button.trigger('click')

    expect(pageHandler).toHaveBeenCalledWith(6)
})
