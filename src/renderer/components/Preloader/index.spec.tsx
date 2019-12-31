import * as React from 'react';
import { mount } from 'enzyme';
import { Preloader } from './index';

test('Checking that the preloader loads in correctly', () => {
  const wrapper = mount(<Preloader />);

  expect(wrapper).not.toBeNull();
});
