import { Route, Routes } from 'react-router-dom';
import RocketView from './components/RocketView';
import MissionView from './components/MissionView';
import NavigationView from './components/NavigationView';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <NavigationView />
        </div>
      </header>
      <Routes>
        <Route path="/rockets" element={<RocketView />} />
        <Route path="/missions" element={<MissionView />} />
      </Routes>
    </div>
  );
}

export default App;
