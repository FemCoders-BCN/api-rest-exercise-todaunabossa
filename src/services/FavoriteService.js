import axios from 'axios';

axios.defaults.baseLocalURL = 'http://localhost:5000/';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

export const FavoriteService = {
  urlGetFavorites: '/localhost:5000/',

  getFavorites: () => {
    return axios.get(FavoriteService.urlGetFavorites)
      .then((response) => response.data)
      .catch((error) => {console.error('Error en getFavorites:', error);
        throw error;
      });
  },
}

