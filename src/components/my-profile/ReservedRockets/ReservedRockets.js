import React from 'react';
import { useSelector } from 'react-redux';

const ReservedRockets = () => {
  const reservedRockets = useSelector((state) => state.rockets
    .filter((rocket) => rocket.reserved));

  return (
    <div className="flex-1">
      <h2 className="text-3xl">My Rockets</h2>
      <ul className="mt-3 border-2 w-4/12 rounded">
        {reservedRockets.length > 0
          ? reservedRockets.map((rocket) => (
            <li className="text-lg font-medium p-5 border-b-2 last:border-b-0 border-slate-300" key={rocket.id}>
              {rocket.rocket_name}
            </li>
          ))
          : (
            <span className="px-10 text-lg">
              You haven&apos;t reserved any Rockets yet
            </span>
          )}
      </ul>
    </div>
  );
};

export default ReservedRockets;
