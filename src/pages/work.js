import React from 'react'
import Layout from '../components/layout'
import SmallHeader from '../components/SmallHeader'
import MainWork from '../components/MainWork'
import Footer from '../components/Footer'

import store from '../state/store';

class WorkPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      position: 0,
      active: false,
      jobs: null,
      recommendations: null,
      isSelected: 'jobs',
      loading: 'is-loading'
    }
    this.setWrapperRef = this.setWrapperRef.bind(this);
  }

  componentDidMount () {
    this.timeoutId = setTimeout(() => {
        this.setState({
          loading: '',
          jobs: store().getState().getJobs,
          recommendations: store().getState().getRecommendations,
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
    return (
      <Layout location={this.props.location} position={this.state.position}>
        <div id="wrapper" className="page">
          <SmallHeader active="work" chosen={this.state.isSelected} />
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

export default WorkPage
