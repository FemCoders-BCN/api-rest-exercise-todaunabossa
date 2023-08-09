import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/';
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';

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

