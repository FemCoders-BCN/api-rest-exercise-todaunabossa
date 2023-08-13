import React from 'react';
import PictureObject from '../pictureObject/PictureObject';


function Create({ images, onAddToFavorites }) {
  return (
    <div>
      <PictureObject pictures={images} onAddToFavorites={onAddToFavorites} />
    </div>
  );
}

export default Create;
