import { NavLink } from 'react-router-dom';
import logo from '../assets/imgs/planet.png';

const NavigationView = () => (
  <>
    <nav className="flex justify-between flex-col mx-4 py-5 md:border-b md:flex-row lg:mx-24">
      <div className="flex items-center px-4">
        <img src={logo} className="h-12 px-4 lg:h-16" alt="Space Hub Logo" />
        <h1 className="text-2xl font-medium lg:text-3xl">Space Traveler&apos;s Hub</h1>
      </div>
      <ul className="self-center">
        <li>
          {[
            ['Rockets', '/rockets'],
            ['Missions', '/missions'],
          ].map(([title, url]) => (
            <NavLink to={url} className="px-8 py-2 text-blue-500 md:text-lg hover:underline" key={title}>{title}</NavLink>
          ))}
        </li>
      </ul>
    </nav>
  </>
);

export default NavigationView;
