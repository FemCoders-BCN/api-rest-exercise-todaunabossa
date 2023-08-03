import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PicturesPage from '../picturesPage/PicturesPage';

const PicturePage = () => {
  const [image, setImage] = useState([]);

  useEffect(() => {
    axios.get('https://picsum.photos/870/200/300?grayscale&blur=2')
      .then(response => {
        setImage(response.data);
      })
      .catch(error => {
        console.error('Error fetching images:', error);
      });
  }, []);

  return (
    <main>
      <h2>Aquí estaria el object by ID </h2>
      <PicturesPage image={image} />
    </main>
  );
};

export default PicturePage