import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const name = 'Peter Parker'

const reactEle = React.createElement(
  'a',{href: 'http://google.com', target: '_blank'},'Click me for Google','hello world'
  )

  

function Test(){
  return (
    <>
      <div >{name}</div>
    </>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <Test/>
)
