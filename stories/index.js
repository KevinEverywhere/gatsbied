import React from 'react';
import { graphql } from 'gatsby';
import { createStore } from 'redux';
import { storiesOf } from '@storybook/react';
// import { Button } from '@storybook/react/demo';
import MainCreative from '../src/components/MainCreative'

storiesOf('MainCreative', module)
  .add('graphql', () => (
    <MainCreative data={this.props.data} />
  ));

// storiesOf('Button', module)
//   .add('with text', () => (
//     <Button>Hello Button</Button>
//   ))
//   .add('with emoji', () => (
//     <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
//   ));

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
