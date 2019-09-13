import {
    FETCHING_SMURF_START,
    FETCHING_SMURF_SUCCESS,
    FETCHING_SMURF_FAILURE
  } from "../actions";
  
  const initialState = {
    smurfs: [{
        name: "Brainey",
        age: "200",
        height: "5cm",
        id: 0
    }],
    isFetching: false,
    error: ""
  };
  
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
          smurfs: [
              ...state.smurfs,
              {
                name: action.payload.name,
                age: action.payload.age,
                id: [ action.payload.id ]
                  
              
          }],
          isFetching: false,
          // smurfs: action.payload
        };
      case FETCHING_SMURF_FAILURE:
        return{
            ...state,
            isFetching: false,
            error: "Could not fetch smurfs"
                
            }
      default:
        return state;
    }
  };