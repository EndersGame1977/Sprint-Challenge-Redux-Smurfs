import axios from 'axios';
/* 
  Action Types Go Here!
  [X] Be sure to export each action type so you can pull it into your reducer
*/
export const FETCH_SMURFS = 'FETCH_SMURFS';
export const ADD_SMURF = 'ADD_SMURF';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
export const fetchSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURFS });
  axios
    .get(`http://localhost:3333/smurfs`)
    .then(res => {
      dispatch({ 
        type: SUCCESS, 
        payload: res.data 
      });
    })
    .catch(err => {
      dispatch({ 
        type: ERROR, 
        payload: err 
      });
    });
};

export const addSmurf = smurf => {
  return dispatch => {
    dispatch({ type: ADD_SMURF });
    axios
      .post(`http://localhost:3333/smurfs`, smurf)
      .then(res => {
        dispatch({
          type: SUCCESS,
          payload: res.data
        })
      })
      .catch(err => {
        dispatch({ 
          type: ERROR, 
          payload: err 
        })
      })
  }
}