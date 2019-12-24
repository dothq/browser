import * as React from 'react';
import { mount } from 'enzyme';
import { Button } from './index';
import { StyledButton } from './styles';
import 'jest-styled-components';

test('Checking onclick function works when clicking the button', () => {
  const fakeFunc = jest.fn();
  const props = {
    background: 'background',
    foreground: null,
    type: null,
    children: null,
    onClick: fakeFunc,
    style: null,
    visible: null,
    icon: null,
  };
  const wrapper = mount(<Button {...props} />);

  wrapper.find(StyledButton).simulate('click');

  expect(wrapper).not.toBeNull();
  expect(fakeFunc).toHaveBeenCalledTimes(1);
});
