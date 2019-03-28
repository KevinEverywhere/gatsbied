import { combineReducers } from 'redux';
import store from './store';
import {
  GET_JOB,
  GET_JOBS,
  GET_RECOMMENDATIONS,
  SEND_EMAIL,
  MSG,
  EMAIL_URL,
  EMAIL_CONFIG,
  GET_IMAGE,
  GET_IMAGES
} from './actions';

export function getJobs(state = {}, action) {
  switch (action.type) {
    case GET_JOBS:
      return Object.assign({}, state,
        store().getState().getJobs,
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
        store.getState().getJob,
      );
    default:
      return state;
  }
}

export const sendEmail = (state={}, action) => {
  switch (action.type) {
    case SEND_EMAIL:
    console.log(action.payload);
    console.log(store().getState());
      return {
        ...state,
        msg:action.payload
      };
    default:
      return state;
  }
}

export function emailURL(state = {}, action) {
  switch (action.type) {
    case EMAIL_URL:
      return Object.assign({}, state,
        action,
      );
    default:
      return state;
  }
}

export function emailConfig(state = {}, action) {
  switch (action.type) {
    case EMAIL_CONFIG:
      return Object.assign({}, state,
        action,
      );
    default:
      return state;
  }
}

export function getImages(state = {}, action) {
  switch (action.type) {
    case GET_IMAGES:
      return Object.assign({}, state,
        store().getState().getImages,
      );
    default:
      return state;
  }
}

export function getImage(state = {}, action) {
  switch (action.type) {
    case GET_IMAGE:
      return Object.assign({}, state,
        store().getState().getImage,
      );
    default:
      return state;
  }
}

export function msg(state = {}, action) {
  switch (action.type) {
    case MSG:
      return Object.assign({}, state,
        action,
      );
    default:
      return state;
  }
}

export default combineReducers({
  getJob,
  getJobs,
  getRecommendations,
  sendEmail,
  msg,
  emailURL,
  emailConfig,
  getImage,
  getImages
});
