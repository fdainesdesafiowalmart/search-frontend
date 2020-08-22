import axios from 'axios';

const baseEndpoint = 'http://localhost:8090';

const instance = axios.create({
  baseURL: baseEndpoint,
  timeout: 5000
});

const resolveBffApiKeyHeaders = () => {
  const headers = {}
  headers['x-walmart-search-bff-key'] = 'SEARCH_BFF_API_KEY'

  return headers
}

const genericGetRequest = (endpoint, params) => instance.get(endpoint, {
  timeout: 10000,
  params: params || {},
  headers: resolveBffApiKeyHeaders()
}).then(result => result.data);

const searchProducts = params => genericGetRequest('/search', params);

export {
    searchProducts
};
