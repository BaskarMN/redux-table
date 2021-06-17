import { GET_USER_LIST_SUCCESS, GET_USER_LIST_FAILURE, DELETE_USER, EDIT_USER, ADD_USER } from "../actions/actionTypes";

const initialState = {
  data: null,  
  error: null,  
}

export default function user(state = initialState, action) {

  switch (action.type) {    
    case GET_USER_LIST_SUCCESS:
      console.log('pay', action.payload)
      const { data } = action.payload;
      console.log('stae', state )
      return {
        ...state,
        data
      }

    case GET_USER_LIST_FAILURE:
      const { error } = action.payload;
      return {
        ...state,
        error
      }

    case DELETE_USER:      
     state.data.data=state.data.data.filter((item) => {               
        return (item.id !== action.payload)})          
      return {
        ...state,                   
      }
      
    case EDIT_USER:
      state.data.data=state.data.data.map(
        (content) => content.id === action.payload.id ? 
        {...content, first_name : action.payload.first_name ,  
          last_name : action.payload.last_name,  
          email : action.payload.email }
        : content)
      return {
        ...state,            
      }

    case ADD_USER:
      state.data.data=state.data.data.concat(action.payload)
      return {
        ...state,            
      }

    default:
      return state
  }
}