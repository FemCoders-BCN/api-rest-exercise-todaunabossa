import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import PictureObject from '../../components/pictureObject/PictureObject'

const PicturesPage = () => {
  return (
    <main>
      <h2>Aquí estarán las 30 objetos de la primera llamada</h2>
      <Navbar />
      <PictureObject />
    </main>
  );
};

export default PicturesPage;
