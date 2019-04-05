import React from 'react'
import SectionChooser from './SectionChooser'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-bicycle"></span>
        </div>
        { Body() }
        <SectionChooser />
    </header>
)

const Body = () => {
  return (
    <div className="content">
        <div className="inner">
          <h2>Welcome!</h2>
          <p className="singleSpace">
              I am a Mobile-first
          </p>
          <p className="singleSpace">
             front end developer who enjoys
          </p>
          <p className="singleSpace">
            playing keytar and bicycling
         </p>
         <p className="singleSpace">
         when not pushing cloud content.
          </p>
          <p>
            ©2019 • Kevin Ready
          </p>
      </div>
    </div>
  );
}

export default Header
