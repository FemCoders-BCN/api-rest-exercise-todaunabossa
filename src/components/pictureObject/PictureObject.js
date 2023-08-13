import axios from 'axios';
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

  const toggleFavorite = (picture) => {
    if (favorites.some(favorite => favorite.id === picture.id)) {
      removeFromFavorites(picture.id);
    } else {
      addToFavorites(picture);
    }
  };

  const addToFavorites = (picture) => {
    setFavorites(prevFavorites => [...prevFavorites, picture]);

    axios.post('http://localhost:5000/pictures', picture)
      .then(response => {
        console.log('Elemento guardado como favorito:', response.data);
      })
      .catch(error => {
        console.log('Error al guardar el elemento como favorito:', error);
      });
  };

  const removeFromFavorites = (pictureId) => {
    setFavorites(prevFavorites => prevFavorites.filter(picture => picture.id !== pictureId));
     axios.delete(`http://localhost:5000/pictures/${pictureId}`)
      .then(response => {console.log('Elemento quitado de favoritos:', response.data);
      }).catch(error => {console.log('Error al quitar el elemento de favoritos:', error);
      });
  };

  return (
    <div>
      <div className="object-container">
        {pictures.map(picture => (
          <div key={picture.id}>
            <img id='object-picture' src={picture.download_url} alt="" />
            <p>ID: {picture.id}</p>
            <p>Autor: {picture.author}</p>

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
