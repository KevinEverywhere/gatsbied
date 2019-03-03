import React from 'react'
import PropTypes from 'prop-types'
import WorkItem from './WorkItem'
import RecommendationItem from './RecommendationItem'

class MainWork extends React.Component {
  constructor(props){
    super();
  }
  drawrecommendations() {
    return this.props.recommendations.map((item, i) => {
       return(
         <RecommendationItem key={i} item={item} />
       )
     });
  }
  drawjobs() {
    return this.props.jobs.map((item, i) => {
       return(
         <WorkItem key={i} item={item} />
       )
     });
  }
  render() {
    let str;
    if(this.props[this.props.isSelected]){
      str=this[`draw${this.props.isSelected}`]();
       // if(this.props.isSelected === 'jobs'){
       //  str=work
      }else{
        str=<li>Main work div</li>;

        // if(this.props.isSelected === 'recommendations'){
        //   str=recommendations
        // }

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
    })
  )
}

export default MainWork


// started: PropTypes.string,
// finished: PropTypes.string,
