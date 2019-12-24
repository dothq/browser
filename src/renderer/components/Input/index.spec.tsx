import * as React from 'react';
import { mount } from 'enzyme';
import Inputfield from './index';
import { Input, Label, Icon, StyledTextfield } from './style';

test('onInput should set error state to false', () => {
  const wrapper = mount(<Inputfield />);

  wrapper.setState({ error: true });

  expect(wrapper.state('error')).toBeTruthy();

  wrapper.find(Input).simulate('input', 'test');

  expect(wrapper.state('error')).toBeFalsy();
});

test('State with hasLabel should make Label truthy', () => {
  const wrapper = mount(<Inputfield label={'label'} />);

  expect(wrapper.find(Label)).toBeTruthy();
});

test('State with hasIcon should make show Icon and onclick icon will run IconClick', () => {
  const spy = jest.spyOn(Inputfield.prototype, 'onIconClick');
  const fakeFunc = jest.fn();

  const wrapper = mount(<Inputfield icon={'Icon1'} onIconClick={fakeFunc} />);

  expect(wrapper.find(Icon)).toBeTruthy();

  wrapper.find(Icon).simulate('click');

  expect(spy).toHaveBeenCalledTimes(1);
  expect(fakeFunc).toHaveBeenCalledTimes(1);
});

test('onIconClick with iconType not of function onIconClick wont be ran', () => {
  const fakeFunc = jest.fn();

  const wrapper = mount(<Inputfield icon={'Icon1'} onIconClick={null} />);

  expect(wrapper.find(Icon)).toBeTruthy();

  wrapper.find(Icon).simulate('click');

  expect(fakeFunc).toHaveBeenCalledTimes(0);
});

test('onFocus on input should run onFoucs', () => {
  const spy = jest.spyOn(Inputfield.prototype, 'onFocus');

  const wrapper = mount(<Inputfield />);

  wrapper.setState({
    activated: false,
    focused: false,
  });

  expect(wrapper.state('activated')).toBeFalsy();
  expect(wrapper.state('focused')).toBeFalsy();

  wrapper.find(Input).simulate('focus');

  expect(spy).toHaveBeenCalledTimes(1);
  expect(wrapper.state('activated')).toBeTruthy();
  expect(wrapper.state('focused')).toBeTruthy();
});

test('onBlur on input should run onBlur', () => {
  const spy = jest.spyOn(Inputfield.prototype, 'onBlur');

  const wrapper = mount(<Inputfield />);

  wrapper.setState({
    activated: true,
    focused: true,
  });

  expect(wrapper.state('activated')).toBeTruthy();
  expect(wrapper.state('focused')).toBeTruthy();

  wrapper.find(Input).simulate('blur');

  expect(spy).toHaveBeenCalledTimes(1);
  expect(wrapper.state('activated')).toBeFalsy();
  expect(wrapper.state('focused')).toBeFalsy();
});

test('onClick StyledTextfield should run onClick ', () => {
  const spy = jest.spyOn(Inputfield.prototype, 'onClick');

  const wrapper = mount(<Inputfield />);

  wrapper.find(StyledTextfield).simulate('click');

  expect(spy).toHaveBeenCalledTimes(1);
});

test('Test should run correctly ', () => {
  const spy = jest.spyOn(Inputfield.prototype, 'test');
  const fakeFunc = jest.fn();

  const wrapper = mount(<Inputfield test={fakeFunc} />);

  (wrapper.instance() as Inputfield).test(fakeFunc);

  expect(spy).toHaveBeenCalledTimes(1);
});

test('Test function should return true if given null ', () => {
  const spy = jest.spyOn(Inputfield.prototype, 'test');

  const wrapper = mount(<Inputfield test={null} />);

  (wrapper.instance() as Inputfield).test(null);

  expect(spy).toReturnWith(true);
});

test('Set value function should set the value ', () => {
  const spy = jest.spyOn(Inputfield.prototype, 'clear');

  const wrapper = mount(<Inputfield />);

  wrapper.setState({
    activated: true,
    error: true,
    focused: true,
  });

  expect(wrapper.state('activated')).toBeTruthy();
  expect(wrapper.state('error')).toBeTruthy();
  expect(wrapper.state('focused')).toBeTruthy();

  (wrapper.instance() as Inputfield).clear();

  expect(spy).toHaveBeenCalledTimes(1);
  expect(wrapper.state('activated')).toBeFalsy();
  expect(wrapper.state('error')).toBeFalsy();
  expect(wrapper.state('focused')).toBeFalsy();
});
