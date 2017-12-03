import React from 'react';
import { shallow } from 'enzyme';
import Header from '../components/Header';


it('Header displays correct text according to wireframe.', () => {
  expect(shallow(<Header />).find('h1').at(0).text()).toBe('My Topics Challenge!');
});
