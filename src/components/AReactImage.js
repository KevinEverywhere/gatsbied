import React from 'react'
import PropTypes from 'prop-types'

const AReactImage = (props) => {
  // console.log(props);
  const radius = {
    primitive: 'sphere',
    radius:props.radius
  }
  if(props.spherical){
    return(
    <a-entity geometry={radius} position={props.position} rotation={props.rotation}>
    <a-image geometry={radius} src={props.src} position="0 0 0" />
    </a-entity>
  )
  }else{
    return(<a-entity position={props.position} rotation={props.rotation}>
      <a-image material="opacity:0.8" src={props.src} width={props.width} height={props.height} position="0 0 0" />
    </a-entity>)
  }
}

AReactImage.propTypes={
  position: PropTypes.string,
  rotation: PropTypes.string,
  radius: PropTypes.string,
  src: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
}

export default AReactImage

/**
 * <AReactImage src={item} rotation={rot} width={distanceBetween} height={distanceBetween} position={pos} />
 */
