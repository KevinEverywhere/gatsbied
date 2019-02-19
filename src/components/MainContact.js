import React from 'react'
import PropTypes from 'prop-types'

class MainContact extends React.Component {
  constructor(props){
    super();
  }
  render() {
    return (
      <main>
      Main Contact div
      </main>
    )
  }
}

MainContact.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default MainContact
