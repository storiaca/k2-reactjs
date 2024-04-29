import React from 'react';
import { useSelector } from 'react-redux';
import Loader from '../components/Loader';
import CardProductComponent from '../components/CardProductComponent';

function FavoritePage() {
  const { allFavorite } = useSelector((state) => state.favoriteStore);
  return (
    <div>
      <h1>Favorite items</h1>
      {isLoaded ? (
        allFavorite.map((product) => {
          return (
            <CardProductComponent
              key={product.id}
              product={product}
              activeView={activeView}
            />
          );
        })
      ) : (
        <div className="flex">
          <Loader />
        </div>
      )}
    </div>
  );
}

export default FavoritePage;
