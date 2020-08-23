import axios from 'axios';

const baseEndpoint = process.env.VUE_APP_SEARCH_BFF_URI;

const instance = axios.create({
  baseURL: baseEndpoint,
  timeout: 5000
});

const resolveBffApiKeyHeaders = () => {
  const headers = {}
  headers[process.env.VUE_APP_SEARCH_BFF_APIKEY_HEADER] = process.env.VUE_APP_SEARCH_BFF_APIKEY_VALUE
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
