import React from 'react';
import './pictureId.css';

function PictureId({ imageUrl, imageSize }) {
  return (
    <div className='picture-container'>
      {imageUrl && <img src={imageUrl} style={{ width: imageSize }} alt="" />}
    </div>
  );
}

export default PictureId;
