import * as React from 'react';
import { mount } from 'enzyme';
import Ripple, { getSize } from './index';
import { Root } from './style';

test('onMouseLeave should call onMouseUp', () => {
  const spy = jest.spyOn(Ripple.prototype, 'onMouseUp');

  const wrapper = mount(<Ripple />);

  wrapper.find(Root).simulate('mouseleave');

  wrapper.setState({ sizeTransition: true });

  expect(spy).toHaveBeenCalledTimes(1);
});

test('onMouseDown should run makeRipple', () => {
  const spy = jest.spyOn(Ripple.prototype, 'makeRipple');

  const wrapper = mount(<Ripple />);

  wrapper.setState({ opacityTransition: true });

  expect(wrapper.state('opacityTransition')).toBeTruthy();

  wrapper.find(Root).simulate('mousedown');

  expect(wrapper.state('opacityTransition')).toBeFalsy();

  expect(spy).toHaveBeenCalledTimes(1);
});

test('getSize should return with 0', () => {
  expect(getSize(0, 0, 0, 0)).toEqual(0);
});

test('getSize should return with correct result', () => {
  expect(getSize(3, 3, 54, 32)).toEqual(125);
});
