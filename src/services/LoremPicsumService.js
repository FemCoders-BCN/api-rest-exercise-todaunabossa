import axios from 'axios';

axios.defaults.baseURL = 'https://picsum.photos';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

export const LoremPicsumService = {
  urlGetAll: '/v2/list/',
  urlGetById: '/id/',
  urlGetGrayscale: '/?grayscale&random=1/',

  getAll: () => {
    return axios.get(LoremPicsumService.urlGetAll)
      .then((response) => response)
      .catch((error) => {
        console.log(error);
        throw error;
      });
  },

  getById: (id, size) => {
    return axios.get(`${LoremPicsumService.urlGetById}/${id}/${size}`)
      .then((response) => response)
      .catch((error) => {
        console.log(error);
        throw error;
      });
  },

  getRandomGrayscale: () => {
    return axios.get(LoremPicsumService.urlGetGrayscale)
      .then((response) => response)
      .catch((error) => {
        console.log(error);
        throw error;
      });
  },
};