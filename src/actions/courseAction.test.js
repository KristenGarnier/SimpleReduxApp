import expect from 'expect'
import * as courseActions from './courseActions'
import * as types from './actionTypes'

import thunk from 'redux-thunk'
import nock from 'nock'
import configureMockStore from 'redux-mock-store'

describe('Course Actions', () => {
  describe('CreateCourseSuccess', () => {
    it('should create a CREATE_COURSE_SUCCESS action', () => {
      const course = {id: 'clean-code', title: 'Clean Code'}
      const expectedAction = {
        type: types.CREATE_COURSES_SUCCESS,
        course: course
      }

      const action = courseActions.createCourseSuccess(course)

      expect(action).toEqual(expectedAction)
    })
  })
})

const middleware = [thunk ],
  mockstore = configureMockStore(middleware)

describe('ASYNC ACTION', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses', (done) => {
    // call nock
    // nock('http://example.com/)
    //  .get('/course')
    //  .reply(200, {body: {courses : [{id: 'clean-course', title:'Clean Code'}]}})

    const expectedActions = [
      {type: types.BEGIN_AJAX_CALL},
      {type: types.LOAD_COURSES_SUCCESS, body: {courses : [{id: 'clean-course', title:'Clean Code'}]}}
    ]

    const store = mockstore({courses: []}, expectedActions)
    store.dispatch(courseActions.loadCourses()).then(() => {
      const actions = store.getActions()
      expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL)
      expect(actions[1].type).toEqual(types.LOAD_COURSES_SUCCESS)
      done()
    })
  })
})
