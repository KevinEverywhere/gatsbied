import React from 'react'
import Layout from '../components/layout'
import GyroController from '../components/GyroController'
import SmallHeader from '../components/SmallHeader'
import MainCreative from '../components/MainCreative'
import Footer from '../components/Footer'

class CreativePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: 'is-loading'
    }
    this.setWrapperRef = this.setWrapperRef.bind(this);
  }

  componentDidMount () {
    this.timeoutId = setTimeout(() => {
        this.setState({loading: ''});
    }, 100);
    // document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount () {
    if (this.timeoutId) {
        clearTimeout(this.timeoutId);
    }
    // document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  render() {
    return (
      <Layout location={this.props.location} position={this.state.position}>
        <div id="wrapper" className="page">
        <SmallHeader active="creative" />
          <GyroController>
            <MainCreative
              setWrapperRef={this.setWrapperRef}
            />
          </GyroController>
          <Footer  />
        </div>
        <div id="bg"></div>
      </Layout>
    )
  }
}

export default CreativePage
