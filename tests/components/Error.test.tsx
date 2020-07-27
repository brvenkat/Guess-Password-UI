import * as React from 'react'
import { mount } from 'enzyme'
import { Error } from '../../src/components/Error'

describe('Error ', () => {
  let formErrors
  beforeEach(() => {
    formErrors = ['Generic Error 1', 'Generic Error 2']
  })
  afterEach(() => {
    jest.resetAllMocks()
  })
  it('Should create a valid snapshot', () => {
    const wrapper = mount(<Error formErrors={formErrors} />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should create error component with valid data ', () => {
    const wrapper = mount(<Error formErrors={formErrors} />)
    expect(wrapper.find('span')).toHaveLength(3)
    expect(wrapper.find('span').at(1).text()).toEqual('Generic Error 1')
    expect(wrapper.find('span').at(2).text()).toEqual('Generic Error 2')
  })
})