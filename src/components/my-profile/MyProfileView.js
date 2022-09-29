import React from 'react';
import JoinedMissions from './JoinedMissions/JoinedMissions';
import ReservedRockets from './ReservedRockets/ReservedRockets';

const MyProfileView = () => (
  <div className="mx-[8%] my-10 flex">
    <JoinedMissions />
    <ReservedRockets />
  </div>
);

export default MyProfileView;
