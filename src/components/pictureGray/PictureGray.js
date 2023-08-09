import React, { useState, useEffect } from 'react';
import { LoremPicsumService } from '../../services/LoremPicsumService';
import './pictureGray.css';

function PictureGray() {
  const [picture, setPicture] = useState(null);

  useEffect(() => {
    const service = LoremPicsumService;

    service.getGrayScale()
      .then(response => setPicture(response.data['']))
      .catch(error => console.log(error));
  }, []);

  if (!picture) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      <div className="grayscale-container">
        <p>ID: {picture.id}</p>
        <p>Autor: {picture.author}</p>
        <img id='pictureGray-image' src={picture} alt="Imagen aleatoria" />     
      </div>
    </div>
  )
}

export default PictureGray;
