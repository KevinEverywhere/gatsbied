import React from 'react'
import PropTypes from 'prop-types'

class MainWork extends React.Component {
  constructor(props){
    super();
  }
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <main>
      {close}
      Main work div
      {this.props.children}
      </main>
    )
  }
}

MainWork.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default MainWork
