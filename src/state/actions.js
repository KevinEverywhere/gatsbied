import store from './store';
export const GET_JOB = 'getJob';
export const GET_JOBS = 'getJobs';
export const GET_RECOMMENDATIONS = 'getRecommendations'

export const getJob =() => store.dispatch({type: GET_JOB});

export const getJobs =() => store.dispatch({type: GET_JOBS});

export const getRecommendations =() => store.dispatch({type: GET_RECOMMENDATIONS});

export default function nothingHere() {
  return {"nothing": "here"};
}
