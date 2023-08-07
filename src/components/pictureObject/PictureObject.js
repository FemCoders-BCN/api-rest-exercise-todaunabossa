import React, { useState, useEffect } from 'react';
import { LoremPicsumService } from '../../services/LoremPicsumService';
import './pictureObject.css'

function PictureObject() {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    const service = LoremPicsumService; 
    
    service.getAll()
      .then(response => setPictures(response.data))
      .catch(error => console.log(error))
  }, []);

  return (
    <div>
      <div className="pictures-container">
        {pictures.map(picture => (
          <div key={picture.id}>
            <p>ID de imagen: {picture.id}</p>
            <p>Autor: {picture.author}</p>
            <img src={picture.download_url} alt="" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default PictureObject;

