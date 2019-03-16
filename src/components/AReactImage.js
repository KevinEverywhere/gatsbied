import React from 'react'
import PropTypes from 'prop-types'

const AReactImage = (props) => {
  if(props.spherical){
    return(<a-sphere material="side:back" class="video-holder" position={props.position} rotation={props.rotation} radius={15*props.height/2} src={props.src}>
    </a-sphere>)
  }else{
    return(<a-entity class="video-holder" position={props.position} rotation={props.rotation}>
      <a-image  src={props.src} width={props.width} height={props.height} position="0 0 0" />
    </a-entity>)
  }
}

AReactImage.propTypes={
  position: PropTypes.string,
  rotation: PropTypes.string,
  src: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
}

export default AReactImage
