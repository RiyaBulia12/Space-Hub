import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchRockets from '../middleware/api';

const RocketView = () => {
  const rocketsObj = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, [rocketsObj.length, dispatch]);

  return (
    <>
      { rocketsObj.map((item) => (
        <div key={item.id} className="mx-8 lg:mx-36">
          <div className="flex flex-col bg-white border shadow-md my-8 md:flex-row text-neutral-700">
            <img className="object-cover w-full h-72 md:h-auto md:w-64" src={item.flickr_images} alt={item.rocket_name} />
            <div className="flex flex-col p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold">{item.rocket_name}</h5>
              <p className="mb-3 font-normal ">{item.description}</p>
              <button
                type="button"
                className="w-36 px-4 py-2.5 bg-blue-600 text-white text-sm
              rounded shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-150 ease-in-out"
              >
                Reserve Rocket
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default RocketView;
