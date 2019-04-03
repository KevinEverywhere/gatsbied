import React from 'react'
import Layout from '../components/layout'

import SmallHeader from '../components/SmallHeader'
import MainContact from '../components/MainContact'
import Footer from '../components/Footer'

class ContactPage extends React.Component {
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
            <MainContact nextPage="ContactReply"
              timeout={this.state.timeout}
              setWrapperRef={this.setWrapperRef}
            />
            <Footer timeout={this.state.timeout} />
          </div>
          <div id="bg"></div>
        </div>
      </Layout>
    )
  }
}

export default ContactPage
