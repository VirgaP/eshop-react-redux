import React from 'react';
import ProductsList from './ProductsList';
import Adapter from 'enzyme-adapter-react-16';
import {configure, shallow} from 'enzyme';

configure({adapter: new Adapter()});
describe('React component test with enzyme', () => {
   it('renders without crashing', () => {
      shallow(<ProductsList />);
    });
});