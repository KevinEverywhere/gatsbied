import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import GyroController from '../components/GyroController'
import SmallHeader from '../components/SmallHeader'
import MainCreative from '../components/MainCreative'
import Footer from '../components/Footer'
import store from '../state/store';

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
      this.setState({
        loading: '',
        images: store().getState().getImages,
      });
    }, 100);
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
            <MainCreative images={this.state.images} data={this.props.data}
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

export const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
    fluid(maxWidth: 1024) {
      ...GatsbyImageSharpFluid
    }
  }
}
`;


export const pageQuery = graphql`
query pageQuery{
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
