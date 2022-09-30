import React from 'react';
import { useSelector } from 'react-redux';

const JoinedMissions = () => {
  const joinedMissions = useSelector((state) => state.missions
    .filter((mission) => mission.reserved));

  return (
    <div className="flex-1">
      <h2 className="text-3xl">My Missions</h2>
      <ul className="mt-3 border-2 w-4/12 rounded">
        {joinedMissions.length > 0
          ? joinedMissions.map((mission) => (
            <li className="text-lg font-medium p-5 border-b-2 last:border-b-0 border-slate-300" key={mission.mission_id}>
              {mission.mission_name}
            </li>
          ))
          : (
            <span className="px-10 text-lg">
              You haven&apos;t joined any missions yet
            </span>
          )}
      </ul>
    </div>
  );
};

export default JoinedMissions;
