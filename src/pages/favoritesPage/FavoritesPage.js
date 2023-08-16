import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Favorites from '../../components/favorites/Favorites';

function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);
  const [newAuthorName, setNewAuthorName] = useState('');

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

  const editFavorite = async (pictureId, newAuthorName) => {
    try {
      const response = await fetch(`http://localhost:5000/pictures/${pictureId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ author: newAuthorName })
      });

      if (response.ok) {
        const updatedFavorites = favorites.map((favorite) => {
          if (favorite.id === pictureId) {
            return { ...favorite, author: newAuthorName };
          }
          return favorite;
        });
        setFavorites(updatedFavorites);
      } else {
        console.log('Error al editar el autor de la imagen');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <h2>Aquí estarán los objetos guardados como favoritos provenientes del CRUD local json-server:</h2>
      <Navbar />
      <Favorites favorites={favorites} toggleFavorite={toggleFavorite} editFavorite={editFavorite} newAuthorName={newAuthorName} setNewAuthorName={setNewAuthorName} />
    </main>
  );
}

export default FavoritesPage;
