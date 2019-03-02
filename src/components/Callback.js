import React, { Component } from 'react';
import loading from '../assets/images/loading.svg';
import { navigate } from 'gatsby';
import { handleAuthentication } from 'auth/Auth';
import { connect } from 'react-redux';
import { setCallbackLink } from '../actions';

const mapStateToProps = ({ callbackLink }) => ({ callbackLink });

const mapDispatchToProps = dispatch => ({
  setCallbackLink: callbackLink => dispatch(setCallbackLink(callbackLink)),
});

class Callback extends Component {
  componentDidMount() {
    const { callbackLink } = this.props;
    handleAuthentication();
    setTimeout(() => {
      if (callbackLink === '/') {
        navigate('/search');
      } else {
        navigate(callbackLink);
      }
    }, 1500);
  }

  render() {
    return (
      <div style={{
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        height: '98vh',
        width: '98vw',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
      }}
      >
        <img src={loading} alt="loading" />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Callback);
