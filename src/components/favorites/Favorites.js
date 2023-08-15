import React, { useState, useEffect } from 'react';
import { FavoriteService } from '../../services/FavoriteService';
import './favorites.css';

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    try {
      const response = await fetch('http://localhost:5000/pictures');
      const data = await response.json();
      setFavorites(data);
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
