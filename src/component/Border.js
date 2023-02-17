import React from 'react'
import "../component/nav.css"

const Border = (props) => {
  return (
    <div className='border'><p className='para' >{props.text}</p></div>
  )
}

export default Border