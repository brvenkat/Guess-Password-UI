import * as React from 'react'
import { mount } from 'enzyme'
import { Attempts } from '../../src/components/Attempts'
import * as mock from '../mockData/mock'

describe('Attempts ', () => {
  it('should create the attempt snapshot ', () => {
    const wrapper = mount(<Attempts hints={mock.allAttempts} />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should create component properly ', () => {
    const wrapper = mount(<Attempts hints={mock.allAttempts} />)
    const firstSpan = wrapper.find('span').at(0)
    const secondSpan = wrapper.find('span').at(8)

    expect(firstSpan.find('span').at(1).text()).toEqual('User Attempt 1')
    expect(firstSpan.find('div').at(0).hasClass('is-attempt')).toBe(true)
    expect(firstSpan.find('span').at(0).find('span')).toHaveLength(7)
    expect(firstSpan.find('span').at(3).hasClass('is-highlighted')).toBe(true)
    expect(firstSpan.find('span').at(3).text()).toContain(6)
    expect(secondSpan.text()).toContain('User Attempt 2')

  })
})