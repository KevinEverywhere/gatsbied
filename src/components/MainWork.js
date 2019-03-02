import React from 'react'
import PropTypes from 'prop-types'
import WorkItem from './WorkItem'

class MainWork extends React.Component {
  constructor(props){
    super();

  }
  render() {
    let str=<li>Main work div</li>;
    if(this.props.jobs){
      const myList = this.props.jobs.map((item, i) => {
        console.log(item);
        return(
          <WorkItem key={i} item={item} />
        )
      });
      str=myList
    }
    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <main>
      {close}
      {str}
      </main>
    )
  }
}

MainWork.propTypes = {
  jobs: PropTypes.arrayOf(
    PropTypes.shape({
      company: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      location: PropTypes.string,
      started: PropTypes.string,
      finished: PropTypes.string,
    })
  )
}

export default MainWork
