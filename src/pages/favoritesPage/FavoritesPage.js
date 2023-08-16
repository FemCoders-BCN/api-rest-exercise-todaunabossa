import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Favorites from '../../components/favorites/Favorites';

function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const response = await fetch('http://localhost:5000/pictures');
        const data = await response.json();
        setFavorites(data);
      } catch (error) {
        console.log(error);
      }
    };

    loadFavorites();
  }, []);

  const toggleFavorite = async (pictureId) => {
    try {
      const response = await fetch(`http://localhost:5000/pictures/${pictureId}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        const updatedFavorites = favorites.filter(picture => picture.id !== pictureId);
        setFavorites(updatedFavorites);
      } else {
        console.log('Error al quitar el elemento de favoritos');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <h2>Aquí estarán los objetos guardados como favoritos provenientes del CRUD local json-server:</h2>
      <Navbar />
      <Favorites favorites={favorites} toggleFavorite={toggleFavorite} />
    </main>
  );
}

export default FavoritesPage;
