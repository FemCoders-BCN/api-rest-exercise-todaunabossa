import React, { useState, useEffect } from 'react';
import { LoremPicsumService } from '../../services/LoremPicsumService';
import './pictureObject.css';


function PictureObject() {
  const [pictures, setPictures] = useState(['']);
  const [favorites, setFavorites] = useState(['']);

  useEffect(() => {
    const service = LoremPicsumService;

    service.getAll()
      .then(response => setPictures(response.data))
      .catch(error => console.log(error));
  }, []);

  // Función para agregar o quitar un elemento de la lista de favoritos
  const toggleFavorite = (picture) => {
    if (favorites.some(favorite => favorite.id === picture.id)) {
      // Si la imagen ya es favorita, la quitamos de la lista
      setFavorites(prevFavorites => prevFavorites.filter(p => p.id !== picture.id));
    } else {
      // Si la imagen no es favorita, la agregamos a la lista
      setFavorites(prevFavorites => [...prevFavorites, picture]);
    }
  };

  return (
    <div>
      <div className="object-container">
        {pictures.map(picture => (
          <div key={picture.id}>
            <img id='object-picture' src={picture.download_url} alt="" />
            <p>ID: {picture.id}</p>
            <p>Autor: {picture.author}</p>

            {/* Botón para agregar/quitar favorito */}
            {favorites.some(favorite => favorite.id === picture.id) ? (
              <button className='add-Favorites' onClick={() => toggleFavorite(picture)}>Quitar de favoritos</button>
            ) : (
              <button className='add-Favorites' onClick={() => toggleFavorite(picture)}>Guardar como favorito</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PictureObject;
