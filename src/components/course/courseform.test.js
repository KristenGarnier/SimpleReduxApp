import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import {mount, shallow} from 'enzyme'
import CourseForm from './CourseForm'

function setup (saving) {
  const props = {
    course: {}, saving: saving, errors: {},
    onSave: () => {},
    onChange: () => {}
  }

  const renderer = TestUtils.createRenderer()
  renderer.render(<CourseForm {...props}/>)
  const output = renderer.getRenderOutput()

  return {
    props,
    output,
    renderer
  }
}

function setupEnzyme (saving) {
  const props = {
    course: {}, saving, errors: {},
    onSave: () => {},
    onChange: () => {}
  }

  return shallow(<CourseForm {...props} />)
}

describe('Course form via React Test Utils', () => {
  it('Renders a form and an h1', () => {
    const {output} = setup()
    expect(output.type).toBe('form')
    let [ h1 ] = output.props.children
    expect(h1.type).toBe('h1')
  })

  it('save button is labeled "save" when not saving', () => {
    const {output} = setup(false)
    const submitButton = output.props.children[ 5 ]
    expect(submitButton.props.value).toBe('Save')
  })

  it('save button is labeled "Saving..." when saving', () => {
    const {output} = setup(true)
    const submitButton = output.props.children[ 5 ]
    expect(submitButton.props.value).toBe('Saving...')
  })
})

describe('Course form via Enzyme', () => {
  it('Should display h1 and form', () => {
    const wrapper = setupEnzyme(false)
    expect(wrapper.find('form').length).toBe(1)
    expect(wrapper.find('h1').text()).toBe('Manage Course')
  })

  it('save button is labeled "save" when not saving', () => {
    const wrapper = setupEnzyme(false)
    expect(wrapper.find('input').props().value).toBe('Save')
  })

  it('save button is labeled "Saving..." when saving', () => {
    const wrapper = setupEnzyme(true)
    expect(wrapper.find('input').props().value).toBe('Saving...')
  })
})
