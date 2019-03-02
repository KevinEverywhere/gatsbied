import React from 'react'
import PropTypes from 'prop-types'

class WorkItem extends React.Component {
  constructor(props){
    super();
  }
  createListsFromDots(str){
    const start='  • ';
    const end='  ';
    const divider = ' • '
    return str; //.replace(start, '\n').replace(end, '\n').replace(divider, ', ');
  }
  render() {
      // return(
      //   <li key={this.props.key}>{this.props.item.company}</li>
      // )
    return (
      <details key={this.props.item.key}>
      <summary>{this.props.item.company}</summary>
      <h3>{this.props.item.title}</h3>
      {this.createListsFromDots(this.props.item.description)}
      </details>
    )
  }
}

WorkItem.propTypes = {
  item:PropTypes.shape({
    company: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    location: PropTypes.string,
  })
}

export default WorkItem

// started: PropTypes.string,
// finished: PropTypes.string,
