/* eslint no-unused-vars: "off" */
import store from './store';
import { navigate } from 'gatsby'

export const GET_JOB = 'getJob';
export const GET_JOBS = 'getJobs';
export const SEND_EMAIL = 'sendEmail';
export const GET_RECOMMENDATIONS = 'getRecommendations';
export const MSG = 'msg';
export const EMAIL_URL = 'emailURL';
export const EMAIL_CONFIG = 'emailConfig';
export const GET_IMAGE = 'getImage';
export const GET_IMAGES = 'getImages';

const getJobAction = job => {
  return ({
    type: GET_JOB,
    payload: job
  })
};
const getJobsAction = jobs => {
  return ({
     type: GET_JOBS,
     payload: jobs
  });
};
const getRecsAction = recommendations => {
  return ({
    type: GET_RECOMMENDATIONS,
    payload: recommendations
  })
};
const sendEmailAction = email => {
  console.log('sendEmailAction');
  return({
    type: SEND_EMAIL,
    payload: email
  })
};
const getImages = images => {
  return ({
     type: GET_IMAGES,
     payload: images
  });
};
const getImage = image => {
  return ({
     type: GET_IMAGE,
     payload: image
  });
};
const getImageAction = image => {
  return ({
    type: GET_IMAGE,
    payload: image
  })
};
const getImagesAction = images => {
  return ({
    type: GET_IMAGES,
    payload: images
  })
};

export const getJobActionCreator = job => store().dispatch(getJobAction(job));
export const getJobsActionCreator = jobs => store().dispatch(getJobsAction(jobs));
export const getRecsActionCreator = recommendations => store().dispatch(getRecsAction(recommendations));
export const prepareSendEmailActionCreator = ( email ) => {
  const sendTo = store().getState().emailURL;
  const config = store().getState().emailConfig;
  const fields = email;
  fetch(sendTo, {
    headers: config,
    method: "OPTIONS",
    mode: "cors"
  })
  .then(response => {
    if (!response.ok) {
     throw Error(response.statusText);
    }
    return sendEmailActionCreator(email, sendTo);
  })
  .catch(error => {
    navigate('/contactOops');
    console.log(error);
    return email;
  });
}
export const sendEmailActionCreator = ( email, sendTo ) => {
  fetch(sendTo, {
    headers: {
      "Access-Control-Request-Method": "POST",
    },
    method: "POST",
    body: encodeURIComponent('json=' + JSON.stringify(email)),
  })
  .then(ret => {
    navigate('/contactReply');
    store().dispatch(sendEmailAction(email));
    return ret;
  })
  .then(ret => {
    console.log(store().getState())
  })
  .catch(error => {
    navigate('/contactOops');
    console.log(error);
    return email;
  });
};

export const getImageActionCreator = image => store().dispatch(getImageAction(image));
export const getImagesActionCreator = images => store().dispatch(getImageAction(images));


export default function nothingHere() {
  return {"nothing": "here"};
}


// export const getJobAction = job => dispatch({ type: GET_JOB, job });
// export const getJobsAction = jobs => dispatch({ type: GET_JOBS, jobs });
// export const getRecommendationsAction = recommendations => dispatch({ type: GET_RECOMMENDATIONS, recommendations });
// export const sendEmailAction = email => dispatch({ type: SEND_EMAIL, email });




// export const sendEmail = mailBlob => dispatch({type: SEND_EMAIL, mailBlob});

// function sendEmail(id) {
//   return dispatch => {
//     dispatch({ type: 'FETCH_USER' });
//     fetch('...').then(user => {
//       dispatch({ type: 'FETCHED_USER' });
//     }, error => {
//       dispatch({ type: 'ERRORED_USER' });
//     });
//   };
// }

// export const getJob =() => dispatch({type: GET_JOB});
//
// export const getJobs =() => dispatch({type: GET_JOBS});
//
// export const getRecommendations =() => dispatch({type: GET_RECOMMENDATIONS});
//
