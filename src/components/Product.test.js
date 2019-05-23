import React from 'react';
import Product from './Product';
import Adapter from 'enzyme-adapter-react-16';
import {configure, shallow} from 'enzyme';

configure({adapter: new Adapter()});
describe('React component test with enzyme', () => {
   it('renders without crashing', () => {
      shallow(<Product />);
    });
});