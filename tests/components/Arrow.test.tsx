import * as React from 'react'
import { mount } from 'enzyme'
import { Arrow } from '../../src/components/Arrow'

describe('Arrow ', () => {
  it('Should create Arrow component ', () => {
    const wrapper = mount(<Arrow className={'test-class'}/>)
    expect(wrapper.find('div')).toHaveLength(3)
    expect(wrapper.find('div').at(0).hasClass('test-class')).toBe(true)
  })
})
