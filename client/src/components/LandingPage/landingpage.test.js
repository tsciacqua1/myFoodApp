import React from 'react';
import { configure, shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import LandingPage from './LandingPage';

configure({adapter: new Adapter()});

describe('LandingPage', () => {
  let wrapper;
  beforeEach(() => {
    wrapper =  shallow(<LandingPage />)
  })

  it('should render a button', () => {
      expect(wrapper.find('button')).toHaveLength(1)
  })

  it('this button has to contain the text "HOMEPAGE" and redirect to "/home"', () => {
    expect(wrapper.find('button').text()).toEqual('HOMEPAGE')
    expect(wrapper.find('a').prop('href')).toEqual('/home/!')
  })
  
});