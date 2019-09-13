import {
    FETCHING_SMURF_START,
    FETCHING_SMURF_SUCCESS,
    FETCHING_SMURF_FAILURE,
    ADD_SMURF,
  
  } from "../actions";
  
  const initialState = {
    smurfs: [],
    isLoading: false,
    error: ''
  }
    
  
  export const smurfReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCHING_SMURF_START:
        return {
          ...state,
          isFetching: true,
          error: ""
        };
      case FETCHING_SMURF_SUCCESS:
        return {
          
              ...state,
              isFetching: false,
              smurfs: action.payload,
              error:''
                  
              
          };
         
          
        
      case FETCHING_SMURF_FAILURE:
        return{
            ...state,
            isFetching: false,
            error: "Could not fetch smurfs"
                
            }

      case ADD_SMURF:
        return {...state, 
                smurfs:[
                ...state.smurfs,
                {name: action.payload.name,
                age: action.payload.age,
                height: action.payload.height}]};
                
      
      default:
        return state;

    }
  };