// import React from 'react'
// import PropTypes from 'prop-types'
// import Helmet from 'react-helmet'
// import {
//   StaticQuery,
//   graphql
// } from 'gatsby'
// import {
//   connect
// } from "react-redux"
// import {
//   data
// } from '../assets/data/linkedIn';
// import './layout.css'
//
// const WorkLayout = ({
//   children,
//   location,
//   position
// }) => {
//
//   let content = ( <
//     div > {
//       children
//     } <
//     /div>
//   );
//
//   return ( <
//     StaticQuery query = {
//       graphql `
//         query JobQuery {
//             Company
//             Title
//             Description
//             Location
//             Started
//             Finished
//         }
//       `
//     }
//     render = {
//       data => (
//         <>
//         <Helmet title = {
//           data.site.siteMetadata.title
//         }
//         meta = {
//           [{
//               name: 'description',
//               content: 'Kevin Ready is a developer, musician and adventurist.'
//             },
//             {
//               name: 'keywords',
//               content: 'freelance,react,node,javascript,contractor,developer'
//             },
//           ]
//         } >
//         <
//         html lang = "en" / >
//         <
//         /Helmet> <
//         div style = {
//           {
//             margin: '0 auto',
//             maxWidth: 960,
//             padding: '0px 1.0875rem 1.45rem',
//             paddingTop: 0,
//           }
//         } >
//         {
//           children
//         } <
//         /div> <
//         />
//       )
//     }
//     />
//   )
// }
//
// WorkLayout.propTypes = {
//   position: PropTypes.number.isRequired,
//   children: PropTypes.node.isRequired,
//   selectPos: PropTypes.function.isRequired,
// }
//
// const mapStateToProps = ({
//   position
// }) => {
//   return {
//     position
//   }
// }
//
// const mapDispatchToProps = dispatch => {
//   return {
//     selectPos: () => dispatch({
//       type: `SELECT_POS`
//     })
//   }
// }
//
// const ConnectedWork = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(WorkLayout)
//
// export default WorkLayout;
//
// import { connect } from "react-redux"
//
// import Header from './header'
// import './layout.css'
//
// const Work = ({ count, increment }) => (
//   <div>
//     <p>Count: {count}</p>
//     <button onClick={increment}>Increment</button>
//   </div>
// )
//
// Work.propTypes = {
//   count: PropTypes.number.isRequired,
//   increment: PropTypes.func.isRequired,
// }
//
// const mapStateToProps = ({ count }) => {
//   return { count }
// }
//
// const mapDispatchToProps = dispatch => {
//   return { increment: () => dispatch({ type: `INCREMENT` }) }
// }
//
// const ConnectedWork = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Counter)
