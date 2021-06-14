import { GET_USER_LIST_SUCCESS, GET_USER_LIST_FAILURE } from "./actionTypes";

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