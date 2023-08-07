import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import { PictureGrayScale } from '../../components/PictureGrayScale/PictureGrayScale';

function GrayscalePage() {
  return (
    <main>
      <Navbar />
      <h2>Aquí estará la imagen de la segunda llamada</h2>
      <PictureGrayScale />
    </main>
  );
};

export default GrayscalePage;