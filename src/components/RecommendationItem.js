import React from 'react'
import PropTypes from 'prop-types'

class RecommendationItem extends React.Component {
  constructor(props){
    super();
  }
  render() {
      // return(
      //   <li key={this.props.key}>{this.props.item.company}</li>
      // )
    return (
      <details key={this.props.item.key}>
      <summary>{this.props.item.First} {this.props.item.Last} </summary>
      <h3>{this.props.item.Title}</h3>
      {this.props.item.Text}
      </details>
    )
  }
}

RecommendationItem.propTypes = {
  item:PropTypes.shape({
    First: PropTypes.string,
    Last: PropTypes.string,
    Company: PropTypes.string,
    Title: PropTypes.string,
    Text: PropTypes.string,
    Created: PropTypes.string,
  })
}


export default RecommendationItem
