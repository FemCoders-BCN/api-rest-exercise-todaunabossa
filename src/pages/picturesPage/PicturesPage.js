import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import PictureObject from '../../components/pictureObject/PictureObject'

const PicturesPage = () => {
  return (
    <main>
      <Navbar />
      <h2>Aquí estarán todos los objetos de la primera llamada</h2>
      <PictureObject/>
    </main>
  );
};

export default PicturesPage;
