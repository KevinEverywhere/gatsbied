import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import SmallHeader from '../components/SmallHeader'
import Footer from '../components/Footer'

class ContactReplyPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      timeout: false,
      loading: 'is-loading'
    }
    this.setWrapperRef = this.setWrapperRef.bind(this);
  }

  componentDidMount () {
    this.timeoutId = setTimeout(() => {
        this.setState({loading: ''});
    }, 100);
  }

  componentWillUnmount () {
    if (this.timeoutId) {
        clearTimeout(this.timeoutId);
    }
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  render() {
    return (
      <Layout location={this.props.location}>
        <div className={`body ${this.state.loading}`}>
          <div id="wrapper" className="page">
            <SmallHeader timeout={this.state.timeout} />
            <div className="deadCenter">
              <p>
                Please forgive a disobedient technology. Its day of reckoning is at hand.
              </p>
              <Link to="/">
                <div className="lglogo">
                  <span className="icon fa-bicycle"></span>
                </div> Home
              </Link>
            </div>
            <Footer timeout={this.state.timeout} />
          </div>
          <div id="bg"></div>
        </div>
      </Layout>
    )
  }
}

export default ContactReplyPage
