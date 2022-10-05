import React from 'react';
import renderer from 'react-test-renderer';

import CoinStatus from '../CoinStatus';

it('renders correctly', () => {
  const tree = renderer.create(<CoinStatus />).toJSON();
  expect(tree).toMatchSnapshot();
});
