// HelloWorld.test.js
import { mount } from '@vue/test-utils'
import { expect, test, describe, beforeEach } from 'vitest'
import HelloWorld from './HelloWorld.vue'

describe('HelloWorld', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(HelloWorld)
  })

  test('renders initial message', () => {
    const message = wrapper.find('h1').text()
    expect(message).toBe('Hello, World!')
  })

  test('changes message when button is clicked', async () => {
    const button = wrapper.find('button')
    await button.trigger('click')
    const message = wrapper.find('h1').text()
    expect(message).toBe('Hello, Vitest!')
  })
})

{
  "scripts": {
    "test": "vitest"
  }
}