import { shallowMount } from '@vue/test-utils'

import SortCriteria from '../SortCriteria.vue'

test('SortCriteria should renders', () => {
    const wrapper = shallowMount(SortCriteria, {
        propsData: {
        }
    })

    expect(wrapper.find('.category-order-dropdown').exists()).toBe(true)
})

test('SortCriteria should shows sort options', async () => {
    const wrapper = shallowMount(SortCriteria, {
        propsData: {
        }
    })

    const selector = wrapper.find('.category-order-dropdown')
    await selector.trigger('click')

    expect(wrapper.find('.sort-by-margin-left').exists()).toBe(true)
})

test('SortCriteria should emit sort by id event', async () => {
    const criteriaChangedHandler = jest.fn()

    const wrapper = shallowMount(SortCriteria, {
        propsData: {
            onCriteriaChanged: criteriaChangedHandler
        }
    })
    const selector = wrapper.find('.category-order-dropdown')
    await selector.trigger('click')

    const sortOption = wrapper.findAll('.category-order-dropdown-item').at(0)
    await sortOption.trigger('click')

    expect(criteriaChangedHandler).toHaveBeenCalledWith('id')
})

test('SortCriteria should emit sort by id event', async () => {
    const criteriaChangedHandler = jest.fn()

    const wrapper = shallowMount(SortCriteria, {
        propsData: {
            onCriteriaChanged: criteriaChangedHandler
        }
    })
    const selector = wrapper.find('.category-order-dropdown')
    await selector.trigger('click')

    const sortOption = wrapper.findAll('.category-order-dropdown-item').at(1)
    await sortOption.trigger('click')

    expect(criteriaChangedHandler).toHaveBeenCalledWith('price')
})

test('SortCriteria should emit sort by id event', async () => {
    const criteriaChangedHandler = jest.fn()

    const wrapper = shallowMount(SortCriteria, {
        propsData: {
            onCriteriaChanged: criteriaChangedHandler
        }
    })
    const selector = wrapper.find('.category-order-dropdown')
    await selector.trigger('click')

    const sortOption = wrapper.findAll('.category-order-dropdown-item').at(2)
    await sortOption.trigger('click')

    expect(criteriaChangedHandler).toHaveBeenCalledWith('brand')
})

test('SortCriteria should emit sort by id event', async () => {
    const criteriaChangedHandler = jest.fn()

    const wrapper = shallowMount(SortCriteria, {
        propsData: {
            onCriteriaChanged: criteriaChangedHandler
        }
    })
    const selector = wrapper.find('.category-order-dropdown')
    await selector.trigger('click')

    const sortOption = wrapper.findAll('.category-order-dropdown-item').at(3)
    await sortOption.trigger('click')

    expect(criteriaChangedHandler).toHaveBeenCalledWith('description')
})
