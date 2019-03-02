import { combineReducers } from 'redux';
import store from './store';
import { GET_JOB,  GET_JOBS, GET_RECOMMENDATIONS } from './actions';

export function getJobs(state = {}, action) {
  switch (action.type) {
    case GET_JOBS:
      return Object.assign({}, state,
        store.getState().getJobs,
      );
    default:
      return state;
  }
}

export function getRecommendations(state = {}, action) {
  switch (action.type) {
    case GET_RECOMMENDATIONS:
      return Object.assign({}, state,
        store.getState().getRecommendations,
      );
    default:
      return state;
  }
}

export function getJob(state = {}, action) {
  switch (action.type) {
    case GET_JOB:
      return Object.assign({}, state,
        store.getState().getJobs,
      );
    default:
      return state;
  }
}

export default combineReducers({
  getJob,
  getJobs,
  getRecommendations,
});
