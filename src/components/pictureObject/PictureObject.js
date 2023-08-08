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
          <img src={picture.download_url} alt="" />
            <p>ID: {picture.id}</p>
            <p>Autor: {picture.author}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PictureObject;

