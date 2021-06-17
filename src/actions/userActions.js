import { GET_USER_LIST_SUCCESS, GET_USER_LIST_FAILURE, DELETE_USER, EDIT_USER, ADD_USER } from "./actionTypes";

const getUserListSuccess = data => {
  return {
    type: GET_USER_LIST_SUCCESS,
    payload: {
      data
    }
  }
}

const getUserListFailure = error => {
  return {  
    type: GET_USER_LIST_FAILURE,
    payload: {
      error
    }
  }
}

export function deleteUser(employeeId) {
  return dispatch => {
      return dispatch({
          type: DELETE_USER,
          payload: employeeId
      });
  }
};

export function editUser(data) {
  return dispatch => {
      return dispatch({
          type: EDIT_USER,
          payload: data
      });
  }
};

export function addUser(data) {
  return dispatch => {
      return dispatch({
          type: ADD_USER,
          payload: data
      });
  }
};

export const getUserList = () => async dispatch => {  
  try {
    const res = await fetch(`https://reqres.in/api/users`);      
    console.log('fetch res', res)
    const data = await res.json();
    dispatch(getUserListSuccess(data));
  } catch (err) {
    dispatch(getUserListFailure(err.message));
  }
}