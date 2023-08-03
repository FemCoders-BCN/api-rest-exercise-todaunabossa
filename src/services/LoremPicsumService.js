import axios from 'axios';

axios.defaults.baseURL = 'https://picsum.photos';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

export const LoremPicsumService = () => {
  const urlGetAll = '/v2/list/100/200';
  const urlGetById = 'https://picsum.photos/870/200/300?grayscale&blur=2';
  const urlGetGrayscale = '/500/700?grayscale?random=2';

  const getAll = () => {
    axios.get(urlGetAll)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  const getById = () => {
    axios.get(urlGetById)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  const getRandomGrayscale = () => {
    axios.get(urlGetGrayscale)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return {
    getAll,
    getById,
    getRandomGrayscale,
  };
};
