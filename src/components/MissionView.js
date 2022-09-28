import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, changeStatus } from '../redux/slices/missionReducer';

function MissionView() {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions);
    // eslint-disable-next-line
  }, []);

  const toggleStatus = (id) => {
    dispatch(changeStatus(id));
  };

  return (
    <div id="missions-section" className="my-5 mx-20 overflow-hidden">
      <table className=" border-collapse table-auto border-2 border-slate-200 ">
        <thead>
          <tr className="">
            <th className="border-2  border-slate-200 p-2">Mission</th>
            <th className="w-4/6 border border-slate-200">Description</th>
            <th className="border-2 border-slate-200 ">Status</th>
            <th className="border-2 border-slate-200 "> </th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td className="p-2 border-2 border-slate-200 text">
                {mission.mission_name}
              </td>

              <td className="p-2 border-2 border-slate-200">{mission.description}</td>

              <td className="p-3 border-2 w-[9%] text-center border-slate-200 ">
                {!mission.reserved && <span className="bg-[#6D757D] p-1 px-1.5 text-white rounded-md font-semibold">NOT A MEMBER</span>}
                {mission.reserved && (
                  <span className="bg-[#18A2B8] p-1 px-1.5 text-white rounded-md font-semibold">Active Member</span>
                )}
              </td>

              <td className="p-3 border-2 border-slate-200 text-center w-1/12">
                <button
                  type="button"
                  className="p-2 border-2 border-slate-400 rounded-md"
                  onClick={() => toggleStatus(mission.mission_id)}
                  style={{
                    borderColor: mission.reserved ? '#d90429' : '#343a40',
                    color: mission.reserved ? '#d90429' : '#343a40',
                  }}
                >
                  {mission.reserved ? 'Leave Mission' : 'Join Mission'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MissionView;
