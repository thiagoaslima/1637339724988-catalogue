import React from 'react';
import { createMemoryHistory } from 'history';
import {mount, configure} from 'enzyme';

import App from '../components/App';
import Home from '../components/Home';
import NotFound from '../components/NotFound';
import Watches from '../components/Watches';
import Iphones from '../components/Iphones';

describe('Application routes', () => {
  it('should render a Home component', () => {
    const wrapper = mount(
      <App history={createMemoryHistory({
        initialEntries: ['/']
      })} />  
    );

    expect(wrapper.find(Home)).toHaveLength(1);
  });
  
  it('should render the Watches component', () => {
    const wrapper = mount(
      <App history={createMemoryHistory({
        initialEntries: ['/watches']
      })} />  
    );

    expect(wrapper.find(Watches)).toHaveLength(1);
  });

  it('should render the Iphones component', () => {
    const wrapper = mount(
      <App history={createMemoryHistory({
        initialEntries: ['/iphones']
      })} />  
    );

    expect(wrapper.find(Iphones)).toHaveLength(1);
  });
  
  it('unknown routes (404) should render a NotFound component', () => {
    const wrapper = mount(
      <App history={createMemoryHistory({
        initialEntries: ['/unknown']
      })} />
    );

    expect(wrapper.find(NotFound)).toHaveLength(1);
  });
});
