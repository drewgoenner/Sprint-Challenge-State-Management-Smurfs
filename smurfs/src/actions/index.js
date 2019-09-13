import axios from 'axios';

const apiUrl = 'http://localhost:3333/smurfs';

export const FETCHING_SMURF_START = "FETCHING_SMURF_START";
export const FETCHING_SMURF_SUCCESS = "FETCHING_SMURF_SUCCESS";
export const FETCHING_SMURF_FAILURE = "FETCHING_SMURF_FAILURE";


export const getSmurfs = () => dispatch => {
    dispatch({ type: FETCHING_SMURF_START });
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            console.log(res)
            dispatch({ type: FETCHING_SMURF_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: FETCHING_SMURF_FAILURE, payload: 'Failed to fetch smurfs'});
        })
}

// Posting Actions
export const ADD_SMURF = 'ADD_SMURF';

export const createSmurf = ({ name, age, height, id }) => {
    return (dispatch) => {
      return axios.post(apiUrl, {name, age, height, id})
        .then(response => {
          dispatch(createSmurfSuccess(response.data))
        })
        .catch(error => {
          throw(error);
        });
    };
  };

  export const createSmurfSuccess =  (data) => {
    return {
      type: ADD_SMURF,
      payload: {
          name: data.name,
          age: data.age,
          height: data.height,
          id: data.id,
      }
    }
  };




