import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import PictureId from '../../components/pictureId/PictureId.js';

function PicturePage() {
  return (
    <main>
      <Navbar />
      <h2>Aquí estará la imagen de la segunda llamada:</h2>
      <PictureId />
    </main>
  );
}

export default PicturePage;
