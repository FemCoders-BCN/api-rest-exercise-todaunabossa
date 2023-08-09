import React, { useState, useEffect } from 'react';
import { LoremPicsumService } from '../../services/LoremPicsumService';
import './pictureId.css';

function PictureId() {
  const [cardById, setCardById] = useState(null);
  const [imageId, setImageId] = useState('');
  const [imageSize, setImageSize] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setImageId(event.target.elements.imageId.value);
    setImageSize(event.target.elements.imageSize.value);
  };
  
  useEffect(() => {
    const service = LoremPicsumService;

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
      <div className='form-container'>  
        <form onSubmit={handleFormSubmit}>
          <label className='input-LabelUp'> ID:
            <input type="text" name="imageId" required />
          </label>
          <br />
          <label className='input-LabelDown'> Size: 
            <input type="text" name="imageSize" required />
          </label>
          <br /><br />
          <button type="submit">Cargar imagen</button>
        </form>

      </div>
      <div className='picture-container'>
        {cardById && <img src={cardById} style={{ width: imageSize }} alt="" />}
      </div>
    </div>
  );
}

export default PictureId;
