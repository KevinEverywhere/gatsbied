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
   oldrender() {
     let str;
     if(this.props[this.props.isSelected]){
       str=this[`draw${this.props.isSelected}`]();
     }else{
       str='';
     }
     return str;
  }
  render() {
    const minWidth = 240;
    return (
      <main>
        <div style={{
          textShadow:`1px 1px black`,
          padding: '1rem',
          color:'white',
          fontWeight: 'bold',
          width: '60%',
          minWidth: `${minWidth}px`
        }}>
          <h2>About Kevin</h2>
          <p>Kevin Ready has kept up with the most current technolgies creating code, players, templates and content for startups, agencies, and digital media clients, since Bill Clinton was in office. This site was created in 2019 using react and gatsby, with graphql, aframe, vanilla JavaScript, and others, optimized for mobile. Kevin is often looking for contract or permanent work using software and technologies for which he is passionate.</p>
          <p style={{display: 'none'}}>
          More information can be found at the following links.
          </p>
        </div>
        <ul className='horizontalBar'>
          <li><Link to='/contact'>Contact</Link></li>
          <li><a href='https://linkedin.com/in/planetkevin/'>LinkedIn</a></li>
          <li><a href='https://github.com/kevineverywhere/'>GitHub</a></li>
        </ul>
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
