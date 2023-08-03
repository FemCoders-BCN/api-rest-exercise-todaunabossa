import React from 'react';

function PictureObject({ id, author, image }) {
  return (
    <div className="picture-object">
      <img src={image} alt={`By ${author}`} />
      <div className="picture-details">
        <p>ID: {id}</p>
        <p>Author: {author}</p>
      </div>
    </div>
  );
}

export default PictureObject;