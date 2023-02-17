import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../component/nav.css"

function Navbar() {

  let navigate=useNavigate();

  let gotoHome=()=>{
    navigate("/")
  }
  
  let gotoAbout=()=>{
    navigate("/About")
  }
  
  let gotoProduct=()=>{
    navigate("/Product")
  }

  let gotoNoti=()=>{
    navigate("/Noti")
  }

  return (
    <div className='navbar'>
    
    <h1 className='headStyle'>REACT ROUTER</h1>
   <button className='btnStyle' onClick={gotoHome}>HOME</button>
   <button className='btnStyle' onClick={gotoAbout}>ABOUT</button>
   <button className='btnStyle' onClick={gotoProduct}>PRODUCT</button>
   <button className='btnStyle' onClick={gotoNoti}>NOTIFICATION</button>


    </div>
  )
}

export default Navbar