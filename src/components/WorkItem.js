import React from 'react'
import PropTypes from 'prop-types'

const WorkItem = ({ item }) => (
  <div className="box">
    <details>
    <summary>{item.Company}</summary>
    <h3>{item.Title}</h3>
    { item.Description }
    </details>
  </div>
)

WorkItem.propTypes = {
  item:PropTypes.shape({
    Company: PropTypes.string,
    Title: PropTypes.string,
    Description: PropTypes.string
  })
}

export default WorkItem
