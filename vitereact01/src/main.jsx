import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>Custom App | chai</h1>
        </div>
    )
}


const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)

function CreatingReactElement(){

  const reactElement = React.createElement(
  // Expects a type, properties and string in this order, and later everything else would be considered variable injections.
  'a',
  {href: 'https://google.com',target: '_blank' },
  'click me to visit google',
)
return reactElement
}

// If CreatingReactElement were a React component, you'd define it as:
// function CreatingReactElement() {
//   return (
//       <a href="https://google.com" target="_blank">
//           Click me to visit Google
//       </a>
//   );
// }


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  {CreatingReactElement()}
  {React.createElement('br')} {/* Explicit break, if necessary (implementation of a break tag) */}
  {/* OR: use a break tag like the code shown below:
  <br /> */}
  {anotherElement}
  {/* CreatingReactElement is not a React component but a regular function returning a React element using React.createElement(),
  that's why it looks a bit different compared to the calling of App and MyApp */}
  <MyApp/> 
  {/* We can even call our own custom function in here. Made this function above in statement 6 */}
  <App/>
  </>
)

