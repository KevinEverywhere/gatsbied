import React from 'react'
import SectionChosen from './SectionChosen'
import ItemChooser from './ItemChooser'

const chosenMe = chooseMe => {
  return (
    <nav>
      <ul>
        <ItemChooser item={chooseMe}  />
      </ul>
    </nav>
  )
}
const chooseMe = chosen => {
  let str;
  switch(chosen){
    case '':
      str=chosen;
      break;
    case 'jobs':
      str=chosenMe('recommendations');
      break;
    case 'recommendations':
      str=chosenMe('work');
      break;
    default:
      str=chosen;
      break;
  }
  return str;
}

const SmallHeader = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
      <SectionChosen { ...props } chosen={props.chosen} />
      {chooseMe(props.chosen)}
    </header>
)

export default SmallHeader
