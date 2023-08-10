import axios from 'axios';

axios.defaults.baseLocalURL = 'http://localhost:5000/';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

export const FavoriteService = {
  urlGetFavorites: '/favorites/',

  getFavorites: () => {
    return axios.get(FavoriteService.urlGetFavorites)
      .then((response) => response)
      .catch((error) => {console.log(error);
        throw error;
      });
  },
};
