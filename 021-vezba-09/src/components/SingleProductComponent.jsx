import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';

function SingleProductComponent({ product }) {
  return (
    <div className="flex flex-col gap-4 pb-5 w-full md:w-[250px] border border-mainBlue rounded-lg items-center">
      <img
        className="w-full h-[150px] object-cover rounded-t-lg"
        src={product.thumbnail}
        alt={product.title}
      />
      <h2>{product.title}</h2>
      <h3>${product.price}</h3>
      <Rating
        name="half-rating-read"
        defaultValue={product.rating}
        precision={0.5}
        readOnly
      />

      <div>
        <Link
          className="px-4 py-2 bg-mainBlue text-whiteTextColor rounded-lg hover:bg-mainYellow transition-all duration-200"
          to={`/singleProduct/${product.id}`}
        >
          Details
        </Link>
      </div>
    </div>
  );
}

export default SingleProductComponent;
