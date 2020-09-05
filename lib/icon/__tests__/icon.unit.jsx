import * as renderer from 'react-test-renderer';
import { mount }   from 'enzyme'
import React from 'react'
import Icon from '../icon'

describe('icon', () => {
    it('icon 是个 svg', () => {
        const json  = renderer.create(<Icon />).toJSON()
        expect(json).toMatchSnapshot()
    })
    it('onCLick', () => {
       /*  let n= 1
        const fn = () => {
            n=2
        } */
        const fn = jest.fn()
        const component = mount(<Icon name='add-outline' onClick={fn}></Icon>);
        component.find('svg').simulate('click')
        //expect(n).toEqual(2)
        expect(fn).toBeCalled()
    })
})