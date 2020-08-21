import { SEARCH_PRODUCTS } from './types'

const mutations = {
  [SEARCH_PRODUCTS](state, searchPattern) {
    state.searchPattern = searchPattern
  }
}

export default mutations;
