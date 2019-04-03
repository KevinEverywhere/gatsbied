import React from 'react'
import Layout from '../components/Layout'

import SmallHeader from '../components/SmallHeader'
import MainWork from '../components/MainWork'
import Footer from '../components/Footer'
import { JobJSON } from '../assets/data/linkedIn'

class RecommendationsPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      position: 0,
      active: false,
      jobs: null,
      recommendations: null,
      isSelected: 'recommendations',
      loading: 'is-loading'
    }
    this.setWrapperRef = this.setWrapperRef.bind(this);
  }

  componentDidMount () {
    this.timeoutId = setTimeout(() => {
        this.setState({
          loading: '',
          jobs: JobJSON.jobs,
          recommendations: JobJSON.recommendations,
        });
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

  selectPosition(position) {
    this.setState({
      currentPosition: position
    })
  }

  render() {
    console.log(this.state.recommendations);
    console.log(this.state.jobs);
    return (
      <Layout location={this.props.location} position={this.state.position}>
        <div id="wrapper" className="page">
          <SmallHeader active="work" />
          <MainWork jobs={this.state.jobs} recommendations={this.state.recommendations}
            position={this.state.position} isSelected={this.state.isSelected}
          />
          <Footer  />
        </div>
        <div id="bg"></div>
      </Layout>
    )
  }
}

export default RecommendationsPage
