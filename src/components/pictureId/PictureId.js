import React, { useState, useEffect } from 'react';
import { LoremPicsumService } from '../../services/LoremPicsumService';
import './PictureId.css';

export default function PictureId() {
  const [cardById, setCardById] = useState(null);
  const [imageId, setImageId] = useState('');
  const [imageSize, setImageSize] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setImageId(event.target.elements.imageId.value);
    setImageSize(event.target.elements.imageSize.value);
  }
  
  useEffect(() => {
    const service = LoremPicsumService();

    if (imageId && imageSize) {
      service.getById(imageId, imageSize)
        .then(response => {
          setCardById(response.request.responseURL);
        })
        .catch(error => console.log(error));
    }
  }, [imageId, imageSize]);

  return (
    <div>
      <div>  
      <form onSubmit={handleFormSubmit}>
        <label>
          ID de imagen:
          <input type="text" name="imageId" required />
        </label>
        <br />
        <label>
          Tamaño en píxeles:
          <input type="text" name="imageSize" required />
        </label>
        <br />
        <button type="submit">Renderizar imagen</button>
      </form>
      </div>
      <div className="image-container">
        {cardById && <img src={cardById} style={{width: imageSize}} alt="" />}
      </div>
    </div>
)}
