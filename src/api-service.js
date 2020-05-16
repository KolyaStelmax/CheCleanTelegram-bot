const axios = require('axios');

class ApiService {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }

  sendCase(createdCase) {
    return axios.post(`${this.apiUrl}/cases`, createdCase, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

module.exports = {
  ApiService,
};
