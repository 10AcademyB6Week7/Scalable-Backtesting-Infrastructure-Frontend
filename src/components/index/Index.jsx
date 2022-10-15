import React from 'react'
import  bg from '../../header-2.png'


export default function Index({isLoggedIn,setIsLoggedIn}) {
  return (
    <div style={{width:'100%'}}>
      <img style={{width:'430px', margin:'0 5px'}} src={bg}></img>
      <img style={{width:'430px', margin:'0 5px'}} src={bg}></img>
      <img style={{width:'430px', margin:'0 5px'}} src={bg}></img>
      <img style={{width:'430px', margin:'0 5px'}} src={bg}></img>
    </div>
  )
}
