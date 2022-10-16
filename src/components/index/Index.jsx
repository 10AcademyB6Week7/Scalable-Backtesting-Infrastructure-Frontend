import React from 'react'
import  bg from '../../header-2.png'
import './index.css'

export default function Index({isLoggedIn,setIsLoggedIn}) {
  return (
    <div style={{width:'100%', position:'relative'}}>
      <img style={{width:'100%', top:"0", zIndex:'-121', position:'absolute',height:'100vh'}} src={bg}></img>
      {/* <img style={{width:'430px', margin:'0 5px'}} src={bg}></img>
      <img style={{width:'430px', margin:'0 5px'}} src={bg}></img>
      <img style={{width:'430px', margin:'0 5px'}} src={bg}></img> */}
      <div className='' >
        <div className='index-content'>  
          <span className='h1'>Welcome to Mela</span>
          <span className='h2'>Your number one backtesting platform</span>
          <br/>
          <br/>
          <span className='h2'>In collaboration with 10 Academy</span>
        </div>
      </div>
    </div>
  )
}
