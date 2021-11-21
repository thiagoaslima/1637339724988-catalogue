import React from 'react';
import {mount} from 'enzyme';

import NotFound from '../components/NotFound';
import { MemoryRouter } from 'react-router';

describe('NotFound component', () => {
  it('should render correctly', () => {
    const wrapper = mount(
        <MemoryRouter>
            <NotFound />
        </MemoryRouter>
    );

    const $container = wrapper.find('main');
    const $title = wrapper.find('h1');
    const $link = wrapper.find('a');

    expect($container).toHaveLength(1);
    expect($title).toHaveLength(1);
    expect($link).toHaveLength(1);
  });  
  
  it('should contain a link to the homepage', () => {
    const wrapper = mount(
        <MemoryRouter>
            <NotFound />
        </MemoryRouter>
    );

    const $link = wrapper.find('a');

    expect($link).toHaveLength(1);
    expect($link.at(0).prop('href')).toBe('/')
  });  

});
