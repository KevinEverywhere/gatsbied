import React from 'react'
import GyroController from '../state/gyroscope'

const SecondPage = () => (
  <GyroController>
    <h1>II</h1>
    <p>This is gyroscope test</p>
  </GyroController>
)
//
// return (
//   <StaticQuery
//     query={graphql`
//       query{
//         allCountry{
//           edges{
//             node{
//               name
//               nativeName
//               code
//               latlng
//               borders
//             }
//           }
//         }
//       }
//     `}
//     render={data => (
//       <>
//         <Helmet
//           title={}
//           meta={[
//             { name: 'description', content: 'Kevin Ready is a developer, musician and adventurist.' },
//             { name: 'keywords', content: 'freelance,react,node,javascript,contractor,developer' },
//             // { name: 'Access-Control-Request-Headers', content: 'Accept,Access-Control-Allow-Origin' },
//             // { name: 'Access-Control-Allow-Origin', content: '*' },
//           ]}
//         >
//           <html lang="en" />
//           <meta name="theme-color" content="#000000" />
//           <meta name="apple-mobile-web-app-capable" content="yes" />
//           <meta name="apple-mobile-web-app-status-bar-style" content="black" />
//           <meta name="description" content="Kevin Ready | Creativist" />
//         </Helmet>
//         {content}
//       </>
//     )}
//   />
// )
// }
//
//
export default SecondPage
