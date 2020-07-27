import * as React from 'react'
import { mount } from 'enzyme'
import { VerifyHint } from '../../src/container/VerifyHint'
import { Attempts } from '../../src/components/Attempts'
import { Error } from '../../src/components/Error'


describe('VerifyHint ', () => {
  it('Should create VerifyHint wrapper properly ', () => {
    const wrapper = mount(<VerifyHint hint={'1234'} />)
    expect(wrapper.find(Attempts)).toBeTruthy()
    expect(wrapper.find('input')).toBeTruthy()
    expect(wrapper.find('button')).toBeTruthy()
    expect(wrapper.find('button').text()).toContain('SUBMIT')
  })
  it('Should create VerifyHint wrapper properly ', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return new Promise((resolve) => {
          resolve({
              status: 200,
              ok: true,
              json: () => new Promise((resolve) => {
                  resolve({
                      correct: false,
                      highlight: ['6', '3'],
                      attempt: '12345678'
                  });
              })
          });
      });
  })
    const wrapper = mount(<VerifyHint hint={'12345678'} />)
    wrapper.find('input').first().simulate('change', {
      target: {
        value: '12345678'
      }
    })
    wrapper.find('form').first().simulate('submit', {
      preventDefault() {}
    })
    wrapper.update()

    expect(window.fetch).toHaveBeenCalledWith('/verify-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: "{\"attempt\":\"12345678\",\"hint\":\"12345678\"}"
    })
    expect(wrapper.find(Error)).toEqual({})
    expect(wrapper.find(Attempts)).toBeTruthy()
    expect(wrapper.find('input')).toBeTruthy()
    expect(wrapper.find('button')).toBeTruthy()
    expect(wrapper.find('button').text()).toContain('SUBMIT')
  })
  it('Validation must fail with invalid input ', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return new Promise((resolve) => {
          resolve({
              status: 200,
              ok: true,
              json: () => new Promise((resolve) => {
                  resolve({
                      correct: false,
                      highlight: ['6', '3'],
                      attempt: '12345678'
                  });
              })
          });
      });
  })
    const wrapper = mount(<VerifyHint hint={'12345678'} />)
    wrapper.find('input').first().simulate('change', {
      target: {
        value: '12345'
      }
    })
    wrapper.find('form').first().simulate('submit', {
      preventDefault() {}
    })
    wrapper.update()

    expect(window.fetch).not.toHaveBeenCalled()
    expect(wrapper.find(Error).text()).toContain('Number should be of length 8')
    expect(wrapper.find(Attempts)).toBeTruthy()
    expect(wrapper.find('input')).toBeTruthy()
    expect(wrapper.find('button')).toBeTruthy()
    expect(wrapper.find('button').text()).toContain('SUBMIT')
  })
})