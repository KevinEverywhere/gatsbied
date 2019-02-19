import React from 'react'
import PropTypes from 'prop-types'

class MainCreative extends React.Component {
  constructor(props){
    super();
  }
  render() {
    return (
      <main>
      Main Creative div
      </main>
    )
  }
}

MainCreative.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default MainCreative
