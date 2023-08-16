import React from 'react';
import './pictureGray.css';

function PictureGray({ picture }) {
  return (
    <div>
      <div className="grayscale-container">
        <p>ID: {picture.id}</p>
        <p>Autor: {picture.author}</p>
        <img id='pictureGray-image' src={picture.download_url} alt="" />     
      </div>
    </div>
  );
}

export default PictureGray;

