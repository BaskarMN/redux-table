import { GET_USER_LIST_SUCCESS, GET_USER_LIST_FAILURE } from "../actions/actionTypes";

const initialState = {
  data: null,  
  error: null
}

export default function user(state = initialState, action) {

  switch (action.type) {    
    case GET_USER_LIST_SUCCESS:
      console.log('pay', action)
      const { data } = action.payload;
      console.log('stae', state )
      return {
        ...state,
        data,        
      }
    case GET_USER_LIST_FAILURE:
      const { error } = action.payload;
      return {
        ...state,
        error
      }
    default:
      return state
  }
}