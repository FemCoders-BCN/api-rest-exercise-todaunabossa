import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import PictureObject from '../../components/pictureObject/PictureObject';
import axios from 'axios';
import { LoremPicsumService } from '../../services/LoremPicsumService';
import './picturesPage.css'

function PicturesPage() {
  const [pictures, setPictures] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchPictures = async () => {
      try {
        const response = await axios.get(LoremPicsumService.urlGetAll); 
        setPictures(response.data);
      } catch (error) {
        console.log('Error al obtener las imágenes:', error);
      }
    };

    fetchPictures();
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
      .then(response => {
        console.log('Elemento quitado de favoritos:', response.data);
      })
      .catch(error => {
        console.log('Error al quitar el elemento de favoritos:', error);
      });
  };

  return (
    <main>
      <h2>Aquí estarán las 30 objetos de la primera llamada</h2>
      <Navbar />
      <div className="pictures-container">
        {pictures.map(picture => (
          <PictureObject
            key={picture.id}
            picture={picture}
            isFavorite={favorites.some(favorite => favorite.id === picture.id)}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </div>
    </main>
  );
}

export default PicturesPage;
