import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {configure, mount} from 'enzyme';
import CheckoutModal from './CheckoutModal';

configure({adapter: new Adapter()});
it("should  call  button click", () => {
    const wrapper = mount(<CheckoutModal/>);
    wrapper.setProps({
    });
    wrapper.setState({ 
    });
    // wrapper.find('Select').simulate('change', {
    //     target: { name: 'select', value: 1 },
    //   });
    wrapper.find('.modal-btn-1').at(0).simulate("click");
    expect().toMatchSnapshot();
});