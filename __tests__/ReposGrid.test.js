import React from 'react';
import ReactDOM from 'react-dom';
import ReposGrid from '../app/components/ReposGrid'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';



configure({ adapter: new Adapter() });


test('ReposGrid',()=> {
  const wrapper = shallow(<ReposGrid org="netflix"/>);
  expect(wrapper).toMatchSnapshot();
});

