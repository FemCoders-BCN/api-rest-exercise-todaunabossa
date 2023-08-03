import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PictureCard = ({ id, author, image }) => {
  return (
    <div className="picture-card">
      <img src={image} alt={`By ${author}`} />
      <div className="picture-details">
        <p>ID: {id}</p>
        <p>Author: {author}</p>
      </div>
    </div>
  );
};

const PicturesList = ({ images }) => {
  return (
    <div className="pictures-list">
      {images.map(image => (
        <PictureCard
          key={image.id}
          id={image.id}
          author={image.author}
          image={`https://picsum.photos/id/${image.id}/500/300`} // Adjust dimensions as needed
        />
      ))}
    </div>
  );
};

const PicturePage = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get('https://picsum.photos/id/237')
      .then(response => {
        setImages(response.data);
      })
      .catch(error => {
        console.error('Error fetching images:', error);
      });
  }, []);

  return (
    <main>
      <h2>Aquí estarán todos los objetos de la primera llamada</h2>
      <PicturesList images={images} />
    </main>
  );
};

export default PicturePage