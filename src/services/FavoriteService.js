import axios from 'axios';

axios.defaults.baseLocalURL = 'http://localhost:5000/pictures';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';


export const FavoriteService = {
  baseLocalURL: '/pictures/',

  getFavorites: () => {
    return axios.get(FavoriteService.baseLocalURL)
      .then((response) => response)
      .catch((error) => {console.log(error);
        throw error;
      });
  },
};
