import React, { useState, useEffect } from 'react'; // Importa useState y useEffect
import { LoremPicsumService } from '../../services/LoremPicsumService';
import './pictureGrayScale.css';

export function PictureGrayScale() {
  const [pictures, setPictures] = useState([]); // Usa la función useState para definir el estado

  useEffect(() => {
    const service = LoremPicsumService;

    service.getRandomGrayscale()
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
