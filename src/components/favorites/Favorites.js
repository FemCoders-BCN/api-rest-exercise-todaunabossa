import React, { useState, useEffect } from 'react';
import { FavoriteService } from '../../services/FavoriteService';
import './favorites.css'



function Favorites() {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    const localhost = FavoriteService(); 
    
    localhost.getFavorites()
      .then(response => setPictures(response.data))
      .catch(error => console.log(error))
  }, []);

  return (
    <div>
      <div className="object-container">
        {pictures.map(picture => (
          <div key={picture.id}>
          <img  id='object-picture' src={pictures} alt="" />
            <p>ID: {picture.id}</p>
            <p>Autor: {picture.author}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Favorites;
