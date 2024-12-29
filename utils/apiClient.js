const axios = require('axios');

const apiClient = axios.create({
    baseURL: 'https://testapi.io/api/RMSTest',
    timeout: 1000
}
);

module.exports = apiClient;