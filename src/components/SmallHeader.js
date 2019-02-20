import React from 'react'
import SectionChosen from './SectionChosen'

const SmallHeader = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
      <SectionChosen { ...props } />
    </header>
)

export default SmallHeader
