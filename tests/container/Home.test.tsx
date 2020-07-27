import * as React from 'react'
import { mount } from 'enzyme'
import { Home, HorizontalLine } from '../../src/container/Home'
import { Arrow } from '../../src/components/Arrow'

describe('Home', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return new Promise((resolve) => {
          resolve({
              status: 200,
              ok: true,
              json: () => new Promise((resolve) => {
                  resolve({
                      hint: '12345678'
                  });
              })
          });
      });
    })
  })
  it('Capture Snapshot', () => {
    const wrapper = mount(<Home />)
    expect(wrapper).toMatchSnapshot()
  })
  it('Should render home page correctly ', () => {
    const wrapper = mount(<Home />)
    console.log('+++ ',wrapper.html())
    expect(window.fetch).toHaveBeenCalledWith('/new-password')
    expect(wrapper.find('div').at(0).text()).toContain('Guess The Password!')
    expect(wrapper.find(HorizontalLine)).toBeTruthy()
    expect(wrapper.find('span').at(1).text()).toContain('Hint')
    expect(wrapper.find(Arrow)).toBeTruthy()
  })
})