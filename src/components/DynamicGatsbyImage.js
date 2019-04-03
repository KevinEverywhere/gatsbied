import React from 'react';
import GatsbyImage from 'gatsby-image';
import { withPrefix } from 'gatsby';

// From https://github.com/orangejellyfish/gatsby-dynamic-image
// A React component that takes a Gatsby File node and renders either a
// gatsby-image component or a native <img> element depending on whether or not
// the node is of type ImageSharp.
export default ({ node, ...props }) => {
  if (props && props.fluid) {
    return <GatsbyImage crossOrigin="anonymous" fluid={props.fluid} {...props} />;
  }
  if (props && props.fixed) {
    return <GatsbyImage crossOrigin="anonymous" fixed={props.fixed} {...props} />;
  }
  if (node && node.publicURL) {
    return <img alt="Gallery item" src={withPrefix(props.src)} crossOrigin="anonymous" {...props} />;
  }
  return <img alt="Gallery item" src={withPrefix(props.src)} crossOrigin="anonymous" {...props} />;
};
