import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

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
        //  {close}
              // {str}


    }
    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <main>
      <div style={{textShadow:`1px 1px black`,padding: '1rem'}}>
        <h2>About Kevin</h2>
        <p>Kevin Ready has kept up with the most current code, audio, video and VR technolgies since Bill Clinton was in office. This site was created using react and gatsby, with redux, aframe, three.js, and others. Kevin is looking for contract or permanent work using software and technologies for which he is passionate.</p>
        <p>
        More information can be found at the following links.
        </p>
        <p>
        <nav>
        <ul style={{listStyle:'none'}}>
        <li><Link to='/contact'>Contact</Link></li>
        <li><a href='https://linkedin.com/in/planetkevin/'>LinkedIn</a></li>
        <li><a href='https://github.com/kevineverywhere/'>GitHub</a></li>
        </ul>
        </nav>
        </p>

      </div>
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
