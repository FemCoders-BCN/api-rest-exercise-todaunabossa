import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import PictureGray from '../../components/pictureGray/PictureGray';
import { LoremPicsumService } from '../../services/LoremPicsumService';

function GrayScalePage() {
  const [picture, setPicture] = useState(null);

  useEffect(() => {
    const fetchGrayScalePicture = async () => {
      try {
        const response = await LoremPicsumService.getRandomGrayScale();
        setPicture(response.data);
      } catch (error) {
        console.log('Error al cargar la imagen en escala de grises:', error);
      }
    };

    fetchGrayScalePicture();
  }, []);

  return (
    <main>
      <h2>Aquí estará la imagen de la tercer llamada, en escala de grises</h2>
      <Navbar />
      {picture ? <PictureGray picture={picture} /> : <p>Cargando...</p>}
    </main>
  );
}

export default GrayScalePage;
