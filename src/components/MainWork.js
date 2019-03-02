import React from 'react'
import PropTypes from 'prop-types'
import WorkItem from './WorkItem'
import RecommendationItem from './RecommendationItem'

class MainWork extends React.Component {
  constructor(props){
    super();

  }
  render() {
    let str=<li>Main work div</li>;
    if(this.props[this.props.isSelected]){
      if(this.props.isSelected === 'jobs'){
        const work = this.props[this.props.isSelected].map((item, i) => {
          console.log(item);
           return(
             <WorkItem key={i} item={item} />
           )
         });
        str=work
      }else{
        if(this.props.isSelected === 'recommendations'){
          const recommendations = this.props[this.props.isSelected].map((item, i) => {
            console.log(item);
             return(
               <RecommendationItem key={i} item={item} />
             )
           });
          str=recommendations
        }
      }
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
