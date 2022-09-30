import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import RocketView from '../RocketView';
import ReservedRockets from '../my-profile/ReservedRockets/ReservedRockets';
import  fetchRockets from '../../middleware/RocketApi';
import MyProfileView from '../my-profile/MyProfileView';

const MockRockets = () => (
  <Provider store={store}>
    <RocketView />
  </Provider>
);

describe('Rockets View', () => {

  it('renders rockets page correctly', () => {
    const tree = renderer.create(<MockRockets />);
    expect(tree).toMatchSnapshot();
  });

  it('renders list of rockets correctly', async () => {
    await store.dispatch(fetchRockets());
    expect(store.getState().rockets.length).toEqual(4);
  });

});

const MockReservedRockets = () => (
  <Provider store={store}>
    <ReservedRockets />
  </Provider>
);

describe('Reserved Rockets View', () => {

  it('renders ReservedRockets correctly', () => {
    const tree = renderer.create(<MockReservedRockets />);
    expect(tree).toMatchSnapshot();
  });

});
