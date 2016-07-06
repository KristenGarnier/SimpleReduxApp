import * as types from '../actions/actionTypes'
import initialState from './initialState'

function actionTypeEndsWithSuccess (type) {
  return type.substring(type.length - 8) === '_SUCCESS'
}

export default function ajaxStatusReducer (state = initialState.numAjaxCallInProgess, action) {
  if (action.type === types.BEGIN_AJAX_CALL) {
    return state + 1
  } else if (actionTypeEndsWithSuccess(action.type)) {
    return state -1
  }

  return state
}