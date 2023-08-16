import React from 'react';
import './favorites.css';

function Favorites({ favorites, toggleFavorite }) {
  return (
    <div>
      <div className="favorites-container">
        {favorites.map(picture => (
          <div key={picture.id}>
            <img id='favorites-pictures' src={picture.download_url} alt="Imagen favorita" />
            <p>ID: {picture.id}</p>
            <p>Autor: {picture.author}</p>
            <button onClick={() => toggleFavorite(picture.id)}>
              Quitar de favoritos
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
