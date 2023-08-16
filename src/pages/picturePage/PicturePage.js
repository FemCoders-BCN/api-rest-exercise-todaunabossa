import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import PictureId from '../../components/pictureId/PictureId.js';
import { LoremPicsumService } from '../../services/LoremPicsumService';

function PicturePage() {
  const [imageUrl, setImageUrl] = useState('');
  const [imageSize, setImageSize] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const imageId = event.target.elements.imageId.value;
    setImageSize(event.target.elements.imageSize.value);

    try {
      const response = await LoremPicsumService.getById(imageId, imageSize);
      setImageUrl(response.request.responseURL);
    } catch (error) {
      console.log('Error al cargar la imagen por ID:', error);
    }
  };

  return (
    <main>
      <h2>Aquí estará la imagen de la segunda llamada</h2>
      <Navbar />
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
      <PictureId imageUrl={imageUrl} imageSize={imageSize} />
    </main>
  );
}

export default PicturePage;

