import { Route, Routes } from 'react-router-dom';
import RocketView from './components/RocketView';
import MissionView from './components/MissionView';
import NavigationView from './components/NavigationView';
import MyProfileView from './components/my-profile/MyProfileView';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <NavigationView />
        </div>
      </header>
      <Routes>
        <Route path="/" element={<RocketView />} />
        <Route path="/missions" element={<MissionView />} />
        <Route path="/my-profile" element={<MyProfileView />} />
      </Routes>
    </div>
  );
}

export default App;
