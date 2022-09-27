import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchRockets from '../middleware/api';
import { reserveRocket, cancelRocket } from '../redux/rocketsReducer';

const RocketView = () => {
  const rocketsObj = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  const reserveClick = (event) => dispatch(reserveRocket(event.target.id));
  const cancelClick = (event) => dispatch(cancelRocket(event.target.id));

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
              <p className="mb-3 font-normal ">
                {item.reserved === true && (
                <span className="w-fit bg-blue-100 text-blue-800 text-xs font-semibold my-2 mr-3 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                  Reserved
                </span>
                )}
                {item.description}
              </p>

              {item.reserved === false
                ? (
                  <button
                    type="button"
                    className="w-40 px-4 py-2.5 bg-blue-600 text-white text-sm
              rounded shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-150 ease-in-out"
                    id={item.id}
                    onClick={reserveClick}
                  >
                    Reserve Rocket
                  </button>
                )
                : (
                  <>

                    <button
                      type="button"
                      className="w-40 px-4 py-2.5 bg-white-600 text-gray-400 text-sm
              rounded shadow-md border border-gray-300 hover:shadow-lg transition duration-150 ease-in-out"
                      id={item.id}
                      onClick={cancelClick}
                    >
                      Cancel Reservation
                    </button>
                  </>
                )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default RocketView;
