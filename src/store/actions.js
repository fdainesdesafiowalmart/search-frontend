import { SEARCH_PRODUCTS } from './types'

const actions = {
    searchProducts({ commit }, searchPattern) {
        commit(SEARCH_PRODUCTS, searchPattern);
    }
}

export default actions
