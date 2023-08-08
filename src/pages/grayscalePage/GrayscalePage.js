import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import PictureGrayScale from '../../components/pictureGrayScale/PictureGrayScale';

function GrayScalePage() { 
  return (
    <main>
      <Navbar />
      <h2>Aquí estará la imagen en escala de grises</h2>
      <PictureGrayScale />
    </main>
  );
};

export default GrayScalePage;