import React, { useState, useEffect } from 'react';
import { FavoriteService } from '../../services/FavoriteService';
import './favorites.css';

function Favorites() {
  const [favorites, setFavorites] = useState(['']);

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    try {
      const response = await FavoriteService.getFavorites();
      const favoritePictures = response.data.pictures.filter(picture => picture.isFavorite);
      setFavorites(favoritePictures);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="favorites-container">
        {favorites.map(picture => (
          <div key={picture.id}>
            <img id='favorites-pictures' src={picture.download_url} alt="Imagen favorita" />
            <p>ID: {picture.id}</p>
            <p>Autor: {picture.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;




/*function Favorites() {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    const localDb = FavoriteService; 
    
    localDb.getFavorites()
      .then(response => setPictures(response.data))
      .catch(error => console.log(error))
  }, []);

  return (
    <div>
      <div className="favorites-container">
        {pictures.map(picture => (
          <div key={picture.id}>
            <img id='favorites-pictures' src={picture.url} alt="Imagen favorita" />
            <p>ID: {picture.id}</p>
            <p>Autor: {picture.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Favorites;*/
