import React from 'react';
import './pictureObject.css';

function PictureObject({ picture, isFavorite, toggleFavorite }) {
  return (
    <div>
      <div className="object-container">
        <img id='object-picture' src={picture.download_url} alt="" />
        <p>ID: {picture.id}</p>
        <p>Autor: {picture.author}</p>

        {isFavorite ? (
          <button className='add-Favorites' onClick={() => toggleFavorite(picture)}>Quitar de favoritos</button>
        ) : (
          <button className='add-Favorites' onClick={() => toggleFavorite(picture)}>Guardar como favorito</button>
        )}
      </div>
    </div>
  );
}

export default PictureObject;
