import axios from 'axios';

const baseEndpoint = 'http://localhost:8332';

const instance = axios.create({
  baseURL: baseEndpoint,
  timeout: 5000
});

const genericGetRequest = (endpoint, params) => instance.get(endpoint, {
  timeout: 10000,
  params: params || {}
}).then(result => result.data);

const searchProducts = params => genericGetRequest('/search', params);

export {
    searchProducts
};
