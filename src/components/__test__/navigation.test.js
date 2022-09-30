import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import NavigationView from '../NavigationView';
import MyProfileView from '../my-profile/MyProfileView';
import MissionView from '../MissionView';
import RocketView from '../RocketView';

describe('Navigation', () => {
  it('renders navigation menu correctly', () => {
    const MockNavigation = () => (
      <Provider store={store}>
        <NavigationView />
      </Provider>
    );
    expect(MockNavigation).toMatchSnapshot();
  });

  it('renders rockets correctly', () => {
    const MockNavigation = () => (
      <Provider store={store}>
        <RocketView />
      </Provider>
    );
    expect(MockNavigation).toMatchSnapshot();
  });

  it('renders missions correctly', () => {
    const MockNavigation = () => (
      <Provider store={store}>
        <MissionView />
      </Provider>
    );
    expect(MockNavigation).toMatchSnapshot();
  });

  it('renders my profile correctly', () => {
    const MockNavigation = () => (
      <Provider store={store}>
        <MyProfileView />
      </Provider>
    );
    expect(MockNavigation).toMatchSnapshot();
  });
});
