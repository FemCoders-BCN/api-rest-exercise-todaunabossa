import axios from 'axios';

axios.defaults.baseURL = 'https://picsum.photos';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

export const LoremPicsumService = {
  urlGetAll: '/v2/list/',
  urlGetById: '/id/',
  urlGetGrayScale: '?grayscale/',

  getAll: () => {
    return axios.get(LoremPicsumService.urlGetAll)
      .then((response) => response)
      .catch((error) => {console.log(error);
        throw error;
      });
  },

  getById: (id, size) => {
    return axios.get(`${LoremPicsumService.urlGetById}/${id}/${size}`)
      .then((response) => response)
      .catch((error) => {console.log(error);
        throw error;
      });
  },

  getGrayScale: (id, size) => {
    const grayscaleParam = "?grayscale";
    const url = `${LoremPicsumService.urlGetGrayScale}/${id, 23}/${size, 300}/${grayscaleParam}`;
  
    return axios.get(url)
      .then((response) => response)
      .catch((error) => {
        console.log(error);
        throw error;
      });
  },
};