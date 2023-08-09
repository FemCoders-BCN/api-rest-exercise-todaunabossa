import React, { useState, useEffect } from 'react';
import { FavoriteService } from '../../services/FavoriteService';
import './favorites.css'



function Favorites() {
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
          <img  id='favorites-pictures' src={pictures} alt="Imagenes favoritas" />
            <p>ID: {picture.id}</p>
            <p>Autor: {picture.author}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Favorites;
