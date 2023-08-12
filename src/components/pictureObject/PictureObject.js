import React, { useState, useEffect } from 'react';
import { LoremPicsumService } from '../../services/LoremPicsumService';
import './pictureObject.css'
import Favorites from '../favorites/Favorites';

function PictureObject() {
  const [pictures, setPictures] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const service = LoremPicsumService;
    
    service.getAll()
      .then(response => setPictures(response.data))
      .catch(error => console.log(error));
  }, []);

  // Función para agregar un elemento a la lista de favoritos
  const addToFavorites = (picture) => {
    setFavorites(prevFavorites => [...prevFavorites, picture]);
  };

  // Función para eliminar un elemento de la lista de favoritos
  const removeFromFavorites = (pictureId) => {
    setFavorites(prevFavorites => prevFavorites.filter(picture => picture.id !== pictureId));
  };

  return (
    <div>
      <div className="object-container">
        {pictures.map(picture => (
          <div key={picture.id}>
            <img id='object-picture' src={picture.download_url} alt="" />
            <p>ID: {picture.id}</p>
            <p>Autor: {picture.author}</p>

            {/* Botones para agregar o quitar favorito */}
            {favorites.some(favorite => favorite.id === picture.id) ? (
              <button className='add-Favorites'  onClick={() => removeFromFavorites(picture.id)}>Quitar de favoritos</button>
            ) : (
              <button className='add-Favorites' onClick={() => addToFavorites(picture)}>Guardar como favorito</button>
            )}
          </div>
        ))}
      </div>

      {/* Renderiza el componente Favorites y pasa la lista de favoritos */}
      <Favorites favorites={favorites} />
    </div>
  )
}

export default PictureObject;
