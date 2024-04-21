import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';

function CardProductComponent({ product, activeView }) {
  return (
    <div
      className={
        activeView === 'listView'
          ? 'w-full flex flex-center justify-between border-mainBlue border-b pb-[15px]'
          : 'w-[300px] h-full border border-mainBlue rounded-lg flex flex-col items-center gap-[15px]'
      }
    >
      {/* product.image ? image sa slikom : fallback image */}
      <div
        className={
          activeView === 'listView'
            ? 'relative w-[100px] h-[100px]'
            : 'relative w-full'
        }
      >
        <img
          className={
            activeView === 'listView'
              ? 'w-[100px] h-[100px] object-cover'
              : 'h-[150px] w-full object-cover rounded-t-lg'
          }
          src={product.thumbnail}
          alt={product.title}
        />
        {/* overlay */}
        <div className="absolute inset-0 bg-stone-900/60 rounded-t-lg hover:opacity-0 transition-all duration-300 cursor-pointer"></div>
      </div>
      <h2 className="font-extraBold text-xl text-mainBlue">{product.title}</h2>
      <span className="text-mainYellow">$ {product.price}</span>
      {/* rating zvezdice */}
      <div className="hidden lg:block">
        <Rating
          name="half-rating-read"
          defaultValue={product.rating}
          precision={0.5}
          readOnly
        />
      </div>

      <Link
        className="bg-mainBlue px-4 py-2 text-whiteTextColor mb-[10px] rounded-lg hover:bg-mainYellow transition-all duration-200"
        to={`/singleProduct/${product.id}`}
      >
        View Details
      </Link>
    </div>
  );
}

export default CardProductComponent;
