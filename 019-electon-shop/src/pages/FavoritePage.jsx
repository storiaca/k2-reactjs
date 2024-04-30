import React from 'react';
import { useSelector } from 'react-redux';
//import Loader from '../components/Loader';
import CardProductComponent from '../components/CardProductComponent';

function FavoritePage() {
  const { allFavorite } = useSelector((state) => state.favoriteStore);
  return (
    <div className="container mx-auto py-3">
      <h1 className="text-center my-7 text-3xl text-mainBlue uppercase">
        Favorite items
      </h1>
      <div className="flex flex-wrap items-center justify-center flex-col lg:flex-row gap-7">
        {allFavorite.map((fav) => {
          return <CardProductComponent key={fav.id} product={fav} />;
        })}
      </div>
      {/* {isLoaded ? (
        allFavorite.map((fav) => {
          return <CardProductComponent key={fav.id} product={fav} />;
        })
      ) : (
        <div className="flex">
          <Loader />
        </div>
      )} */}
    </div>
  );
}

export default FavoritePage;
