import * as React from 'react';
import { mount } from 'enzyme';
import Textfield from './index';

import { StyledTextfield, Textarea, Label, Icon } from './style';

test('onInput should set error state to false', () => {
  const wrapper = mount(<Textfield />);

  wrapper.setState({ error: true });

  expect(wrapper.state('error')).toBeTruthy();

  wrapper.find(Textarea).simulate('input', 'test');

  expect(wrapper.state('error')).toBeFalsy();
});

test('State with hasLabel should make Label truthy', () => {
  const wrapper = mount(<Textfield label={'label'} />);

  expect(wrapper.find(Label)).toBeTruthy();
});

test('State with hasIcon should make show Icon and onclick icon will run IconClick', () => {
  const spy = jest.spyOn(Textfield.prototype, 'onIconClick');
  const fakeFunc = jest.fn();

  const wrapper = mount(<Textfield icon={'Icon1'} onIconClick={fakeFunc} />);

  expect(wrapper.find(Icon)).toBeTruthy();

  wrapper.find(Icon).simulate('click');

  expect(spy).toHaveBeenCalledTimes(1);
  expect(fakeFunc).toHaveBeenCalledTimes(1);
});

test('onIconClick with iconType not of function onIconClick wont be ran', () => {
  const fakeFunc = jest.fn();

  const wrapper = mount(<Textfield icon={'Icon1'} onIconClick={null} />);

  expect(wrapper.find(Icon)).toBeTruthy();

  wrapper.find(Icon).simulate('click');

  expect(fakeFunc).toHaveBeenCalledTimes(0);
});

test('onFocus on input should run onFocus', () => {
  const spy = jest.spyOn(Textfield.prototype, 'onFocus');

  const wrapper = mount(<Textfield />);

  wrapper.setState({
    activated: false,
    focused: false,
  });

  expect(wrapper.state('activated')).toBeFalsy();
  expect(wrapper.state('focused')).toBeFalsy();

  wrapper.find(Textarea).simulate('focus');

  expect(spy).toHaveBeenCalledTimes(1);
  expect(wrapper.state('activated')).toBeTruthy();
  expect(wrapper.state('focused')).toBeTruthy();
});

test('onBlur on input should run onBlur', () => {
  const spy = jest.spyOn(Textfield.prototype, 'onBlur');

  const wrapper = mount(<Textfield />);

  wrapper.setState({
    activated: true,
    focused: true,
  });

  expect(wrapper.state('activated')).toBeTruthy();
  expect(wrapper.state('focused')).toBeTruthy();

  wrapper.find(Textarea).simulate('blur');

  expect(spy).toHaveBeenCalledTimes(1);
  expect(wrapper.state('activated')).toBeFalsy();
  expect(wrapper.state('focused')).toBeFalsy();
});

test('onClick StyledTextfield should run onClick ', () => {
  const spy = jest.spyOn(Textfield.prototype, 'onClick');

  const wrapper = mount(<Textfield />);

  wrapper.find(StyledTextfield).simulate('click');

  expect(spy).toHaveBeenCalledTimes(1);
});

test('Test should run correctly ', () => {
  const spy = jest.spyOn(Textfield.prototype, 'test');
  const fakeFunc = jest.fn();

  const wrapper = mount(<Textfield test={fakeFunc} />);

  (wrapper.instance() as Textfield).test(fakeFunc);

  expect(spy).toHaveBeenCalledTimes(1);
});

test('Test function should return true if given null ', () => {
  const spy = jest.spyOn(Textfield.prototype, 'test');

  const wrapper = mount(<Textfield test={null} />);

  (wrapper.instance() as Textfield).test(null);

  expect(spy).toReturnWith(true);
});

test('Set value function should set the value ', () => {
  const spy = jest.spyOn(Textfield.prototype, 'clear');

  const wrapper = mount(<Textfield />);

  wrapper.setState({
    activated: true,
    error: true,
    focused: true,
  });

  expect(wrapper.state('activated')).toBeTruthy();
  expect(wrapper.state('error')).toBeTruthy();
  expect(wrapper.state('focused')).toBeTruthy();

  (wrapper.instance() as Textfield).clear();

  expect(spy).toHaveBeenCalledTimes(1);
  expect(wrapper.state('activated')).toBeFalsy();
  expect(wrapper.state('error')).toBeFalsy();
  expect(wrapper.state('focused')).toBeFalsy();
});
