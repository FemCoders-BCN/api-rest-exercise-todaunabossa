import React, { useState } from 'react';
import './favorites.css';

function Favorites({ favorites, toggleFavorite, editFavorite }) {
  const [editingAuthor, setEditingAuthor] = useState(null);
  const [newAuthorName, setNewAuthorName] = useState('');

  return (
    <div>
      <div className="favorites-container">
        {favorites.map(picture => (
          <div key={picture.id}>
            <img id='favorites-pictures' src={picture.download_url} alt="Imagen favorita" />
            <p>ID: {picture.id}</p>
            <p>Autor: {picture.author}</p>
            {editingAuthor === picture.id ? (
              <div>
                <input
                  type="text"
                  placeholder="Nuevo autor"
                  value={newAuthorName}
                  onChange={(event) => setNewAuthorName(event.target.value)}
                />
                <button onClick={() => editFavorite(picture.id, newAuthorName)}>
                  Guardar
                </button>
              </div>
            ) : (
              <div>
                <button onClick={() => setEditingAuthor(picture.id)}>
                  Editar 
                </button>
                <button onClick={() => toggleFavorite(picture.id)}>
                  Eliminar
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
