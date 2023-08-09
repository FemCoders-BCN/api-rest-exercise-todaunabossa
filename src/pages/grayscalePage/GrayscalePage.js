import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import PictureGray from '../../components/pictureGray/PictureGray';

function GrayScalePage() { 
  return (
    <main>
      <Navbar />
      <h2>Aquí estará la imagen random en escala de grises</h2>
      <PictureGray />
    </main>
  );
}

export default GrayScalePage;
