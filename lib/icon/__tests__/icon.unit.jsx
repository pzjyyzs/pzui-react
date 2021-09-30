import * as renderer from 'react-test-renderer';
import { mount }   from 'enzyme'
import React from 'react'
import Icon from '../icon'

describe('icon', () => {
    it('size color title none', () => {
        const json = renderer.create(
            <Icon>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 12C6 11.4477 6.44772 11 7 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H7C6.44772 13 6 12.5523 6 12Z"
                />
            </Icon>
        ).toJSON();
        expect(json).toMatchSnapshot();
    })
})