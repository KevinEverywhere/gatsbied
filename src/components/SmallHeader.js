import React from 'react'
import SectionChosen from './SectionChosen'

const SmallHeader = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
      <SectionChosen { ...props } chosen={props.chosen} />
    </header>
)

export default SmallHeader
