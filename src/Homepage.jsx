import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from './stores/product';
import { addToCart } from './stores/cartSlice';

const Homepage = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.product.products);
  const status = useSelector((state) => state.product.status);
  const error = useSelector((state) => state.product.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div>Loading, please wait...</div>;
  }

  if (status === 'failed') {
    return <div>{error}</div>;
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {items.map((p) => (
        <div
          key={p.id}
          className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden mb-6"
        >
          <img
            src={p.image}
            alt={p.title}
            className="w-full h-48 object-cover object-center"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800 truncate">
              {p.title}
            </h2>
            <p className="text-gray-600">${p.price}</p>
            <button
              onClick={() => dispatch(addToCart(p))}
              className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200 ease-in-out"
            >
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Homepage;
