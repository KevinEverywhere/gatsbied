import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import GyroController from '../components/GyroController'
import SmallHeader from '../components/SmallHeader'
import MainExperimental from '../components/MainExperimental'
import Footer from '../components/Footer'
import CameraHolder from '../components/CameraHolder'

class ExperimentalPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: 'is-loading'
    }
    this.setWrapperRef = this.setWrapperRef.bind(this);
  }

  componentDidMount () {
    this.timeoutId = setTimeout(() => {
      let s=document.querySelector('#instructions').style;
      setInterval(() => {
        if(s.opacity>0){
          s.opacity=s.opacity-0.001;
        }else{
          s.display='none';
        }

      },2000)
      this.setState({
        loading: '',
      });
    }, 500);
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
      <Layout location={this.props.location} position={this.state.position}>
        <div id="wrapper" className="page">
        <SmallHeader timeout={this.state.timeout} active="creative" />
          <GyroController>
            <MainExperimental data={this.props.data} setWrapperRef={this.setWrapperRef}>
              <CameraHolder />
            </MainExperimental>
            { Instructions() }
          </GyroController>
          <Footer  timeout={this.state.timeout} />
        </div>
        <div id="bg"></div>
      </Layout>
    )
  }
}

export default ExperimentalPage

const Instructions = () => {
  return (
    <div className="content" id="instructions">
        <div className="inner">
          <h3>a device-only experience</h3>
          <p className="singleSpace">
            from the center, tilt up or down
         <br />
           in one of the four directions
          <br/>
            selecting elements at the end
           </p>
      </div>
    </div>
  );
}

export const experimentalFluidImage = graphql`
fragment experimentalFluidImage on File {
  childImageSharp {
    fluid(maxWidth: 1024) {
      ...GatsbyImageSharpFluid
    }
  }
}
`;


export const experimentalPageQuery = graphql`
query experimentalPageQuery{
  allFile{
    edges{
      node{
        id
        ...fluidImage
      }
    }
  }
}
`;
