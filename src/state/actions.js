import store from './store';
import { navigate } from 'gatsby'

export const GET_JOB = 'getJob';
export const GET_JOBS = 'getJobs';
export const SEND_EMAIL = 'sendEmail';
export const GET_RECOMMENDATIONS = 'getRecommendations';
export const MSG = 'msg';
export const EMAIL_URL = 'emailURL';
export const EMAIL_CONFIG = 'emailConfig';

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

export const getJobActionCreator = job => store().dispatch(getJobAction(job));
export const getJobsActionCreator = jobs => store().dispatch(getJobsAction(jobs));
export const getRecsActionCreator = recommendations => store().dispatch(getRecsAction(recommendations));
export const sendEmailActionCreator = ( email ) => {
  const sendTo = store().getState().emailURL;
  const fields = email;
  console.log(email);
  const config = store().getState().emailConfig;
  fetch(sendTo, {
    headers: config,
    method: "OPTIONS", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    // body: fields, //  type must match "Content-Type" header
  })
  .then(response => {
    console.log(response);
    if (!response.ok) {
     throw Error(response.statusText);
    }
    fetch(sendTo, {
      headers: {
        "Access-Control-Request-Method": "POST",
      },
      // mode: "cors", // no-cors, cors, *same-origin
      method: "POST",
      // *GET, POST, PUT, DELETE, etc.
      // mode: "cors", // no-cors, cors, *same-origin
      body: 'json=' + encodeURIComponent(JSON.stringify(fields)),
      //       body: {json:`{${encodeURIComponent(JSON.stringify(fields))}}`},
      //  type must match "Content-Type" header
      // body: fields, //  type must match "Content-Type" header
    })
    .then(ret => {
      console.log(ret);
      navigate('/contactReply');
      return ret; // JSON.stringify(ret);
    })
    // JSON-string from `response.json()` call       navigate('/contactReply');
    // console.log(JSON.stringify(data))
    .catch(error => {
      navigate('/contactOops')
      console.log(error)
      return email;
    });
  })
  .catch(error => {
    navigate('/contactOops')
    console.log(error)
    return email;
  });
  store().dispatch(sendEmailAction(email));
};


// export const getJobAction = job => dispatch({ type: GET_JOB, job });
// export const getJobsAction = jobs => dispatch({ type: GET_JOBS, jobs });
// export const getRecommendationsAction = recommendations => dispatch({ type: GET_RECOMMENDATIONS, recommendations });
// export const sendEmailAction = email => dispatch({ type: SEND_EMAIL, email });



export default function nothingHere() {
  return {"nothing": "here"};
}

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
