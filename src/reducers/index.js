import {combineReducers} from 'redux'
import courses from './courseReducer'
import authors from './authorReducer'
import numAjaxCallInProgess from './ajaxStatusReducer'

const rootReducer = combineReducers({
  courses,
  authors,
  numAjaxCallInProgess
})

export default rootReducer
