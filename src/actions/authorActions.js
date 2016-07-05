import * as types from './actionTypes'
import authorApi from '../api/mockAuthorApi'

export function loadAuthorsSuccess (courses) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors }
}

export function loadCourses () {
  return function (dispatch) {
    return authorApi.getAllAuthors()
      .then((authors) => {
        dispatch(loadAuthorsSuccess(authors))
      })
      .catch((err) => {
        throw(err)
      })
  }
}
