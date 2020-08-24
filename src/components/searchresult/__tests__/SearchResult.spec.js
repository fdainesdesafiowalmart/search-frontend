import { shallowMount } from '@vue/test-utils'

import SearchResult from '../SearchResult.vue'
import ProductCard from '../../product/ProductCard.vue'
import Paginator from '../../paginator/Paginator.vue'
import NoResults from '../NoResults.vue'
import NoSearch from '../NoSearch.vue'
import SortCriteria from '../SortCriteria.vue'


test('SearchResult should renders no result component', () => {
    const wrapper = shallowMount(SearchResult, {
        propsData: {
            totalPages: 2,
            currentPage: 1,
            products: [],
            searchPattern: 'foobar'
        }
    })

    const noresult = wrapper.findComponent(NoResults)
    expect(noresult.exists()).toBe(true)

    expect(wrapper.find('.shop-wrapper').exists()).toBe(true)
})

test('SearchResult should renders no search component', () => {
    const wrapper = shallowMount(SearchResult, {
        propsData: {
            totalPages: 2,
            currentPage: 1,
            products: [],
            searchPattern: ''
        }
    })

    const nosearch = wrapper.findComponent(NoSearch)
    expect(nosearch.exists()).toBe(true)

    expect(wrapper.find('.shop-wrapper').exists()).toBe(true)
})

test('SearchResult should renders products, sort criteria and paginator components', () => {
    const wrapper = shallowMount(SearchResult, {
        propsData: {
            totalPages: 2,
            currentPage: 1,
            products: [{}],
            searchPattern: 'foobar'
        }
    })

    const sortcriteria = wrapper.findComponent(SortCriteria)
    expect(sortcriteria.exists()).toBe(true)
    const productcard = wrapper.findComponent(ProductCard)
    expect(productcard.exists()).toBe(true)
    const paginator = wrapper.findComponent(Paginator)
    expect(paginator.exists()).toBe(true)

    expect(wrapper.find('.shop-wrapper').exists()).toBe(true)
})


test('SearchResult should renders products, sort criteria and paginator components', () => {
    const sortCriteriaHandler = jest.fn()

    const wrapper = shallowMount(SearchResult, {
        propsData: {
            totalPages: 2,
            currentPage: 1,
            products: [{}],
            searchPattern: 'foobar',
            changeSortCriteriaCallback: sortCriteriaHandler
        }
    })

    wrapper.vm.sortCriteriaHandler('foobar')

    expect(sortCriteriaHandler).toHaveBeenCalledWith('foobar')
})
