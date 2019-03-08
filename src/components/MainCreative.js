import React from 'react'
import Assets from './Assets'
import Entities from './Entities'

class MainCreative extends React.PureComponent {
  constructor(props){
    super();
    this.state={loadedContent:null}
  }
  componentDidMount(){
    import('aframe')
      .then((aframe) => {
          this.setState({
          loadedContent:(
            <main>
              <a-scene cursor="rayOrigin: mouse" embedded style={{width:'100%',height:'100%'}}>
                <Assets />
                <Entities />
              </a-scene>
            </main>
          )})
      })
      .catch((error) => console.error(error));
  }
  render() {
    return this.state.loadedContent; // ? this.loadedContent : <div>Loading . . .</div>
  }
}

MainCreative.propTypes = {
}

export default MainCreative

// npx create-react-app demo-demo

// // <a-entity
// //   position="0 0 0"
// //   scale="-1 1 1"
// //   rotation="0 0 0"
// //   geometry={{primitive:'sphere',radius:200}}
// // >
// //   <a-animation
// //     attribute="rotation"
// //     to="0 -360 0"
// //     dur="150000"
// //     easing="linear"
// //     repeat="indefinite"
// //   />
// // </a-entity>
// // <a-camera position="0 -100 0" />
//  */
// Content360Page.defaultProps = {
//   first: '',
//   second: '',
// };
//
// Content360Page.propTypes = {
//   first: PropTypes.string,
//   second: PropTypes.string,
// }
