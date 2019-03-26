import React from 'react'
import PropTypes from 'prop-types'
import { sendEmailActionCreator } from '../state/actions'

class MainContact extends React.Component {
    constructor(props) {
      super();
      this.state = {
        fields: {},
        errors: {}
      }
    }
    handleChange = e => {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      console.log(fields)
      this.setState({ fields });
    }
    sendFields = () => {
      sendEmailActionCreator(this.state.fields)
    }

    handleSubmit = event => {
      event.preventDefault();
      console.log(this.state.fields);
      if (this.validateForm()) {
        this.sendFields()
      }
    }

    validateForm = () => {
      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      if (!fields["uname"]) {
        formIsValid = false;
        errors["uname"] = "Please enter your name.";
      }

      if (typeof fields["uname"] !== "undefined") {
        if (!fields["uname"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["uname"] = "Please enter alphabetic characters only.";
        }
      }

      if (!fields["message"]) {
        formIsValid = false;
        errors["message"] = "Please enter a message.";
      }

      if (!fields["email"]) {
        formIsValid = false;
        errors["email"] = "*Please enter your email-ID.";
      }

      if (typeof fields["email"] !== "undefined") {
        //regular expression for email validation
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(fields["email"])) {
          formIsValid = false;
          errors["email"] = "*Please enter valid email-ID.";
        }
      }
      this.setState({
        errors: errors
      });
      return formIsValid;
    }

    render() {
      return (
        <main>
        <form name="contactForm" onSubmit={this.handleSubmit} method="post">
          <div className="field half first">
            <label htmlFor="uname">Name <span style={{color:'white',fontWeight: 900}}>{this.state.errors.uname}</span></label>
            <input onChange={this.handleChange} type="text" name="uname" id="uname" />
          </div>
          <div className="field half">
            <label htmlFor="email">Email <span style={{color:'white',fontWeight: 900}}>{this.state.errors.email}</span></label>
            <input onChange={this.handleChange} type="text" name="email" id="email" />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea onChange={this.handleChange} name="message" id="message" rows="6"></textarea>
          </div>
          <ul className="actions">
            <li><input type="submit" name="submitter" value="Send Message" className="special" /></li>
            <li><input type="reset" name="resetter" value="Reset" /></li>
          </ul>
          <input type="hidden" name="_text" value="contactReply" />
        </form>
      </main>
    )
  }
}

MainContact.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default MainContact

// fetch()
// this.postData(sendTo, fields);
  // .then(data => {
      //   navigate('/contactReply');
      //   console.log(JSON.stringify(data))
      // }) // JSON-string from `response.json()` call
      // .catch(error => {
      //   navigate('/contactOops')
      //   console.error(error)
      // });

    // axios.post(sendTo, fields, config)
    //  .then(res => {
    //    navigate('/contactReply')
    //  })
    //  .catch(oops => {
    //    navigate('/contactOops')
  //  })
