import React from 'react'
import PropTypes from 'prop-types'

const AReactVideo = (props) => {
  const radius = `primitive: sphere; radius:${props.radius}`
  if(props.spherical){
    return(
    <a-entity geometry={radius} class="video-holder" position={props.position} rotation={props.rotation}>
    <a-video material="side:double" geometry={radius} src={props.src} controls video-texture position="0 0 0" />
    </a-entity>
  )
  }else{
    return(<a-entity class="video-holder" position={props.position} rotation={props.rotation}>
      <a-video  src={props.src} controls video-texture width={props.width} height={props.height} position="0 0 0" />
    </a-entity>)
  }
}

AReactVideo.propTypes={
  position: PropTypes.string,
  rotation: PropTypes.string,
  src: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
}

export default AReactVideo
