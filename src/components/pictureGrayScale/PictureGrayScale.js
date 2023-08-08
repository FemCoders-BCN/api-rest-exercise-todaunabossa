import React, { useState, useEffect } from 'react';
import { LoremPicsumService } from '../../services/LoremPicsumService';
import './pictureGrayScale.css';

function PictureGrayScale() {
  const [picture, setPicture] = useState();

  useEffect(() => {
    const service = LoremPicsumService; // Asegúrate de llamar la función

    service.getRandomGrayscale()
      .then(response => setPicture(response.data[0])) // Accede al primer elemento del array
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="picture-container">
      <div>
        {picture && <img src={picture.download_url} alt="" />}
      </div>
    </div>
  );
}

export default PictureGrayScale;
