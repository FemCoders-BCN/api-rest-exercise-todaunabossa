import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Favorites from '../../components/favorites/Favorites';

function FavoritesPage() {
  return (
    <main>
        <Navbar/>
        <h2>Aquí estaran los objetos guardados como favoritos <br/>
        provenientes del CRUD local json-server:</h2>
        <Favorites />
    </main>
  )
}

export default FavoritesPage;