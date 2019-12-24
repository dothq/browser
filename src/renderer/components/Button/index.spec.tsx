import * as React from 'react'
import {mount} from 'enzyme'
import {Button} from './index'
import 'jest-styled-components'


test("df", () => {
    const wrapper = mount(<Button/>);

    expect(wrapper).not.toBeNull();
})