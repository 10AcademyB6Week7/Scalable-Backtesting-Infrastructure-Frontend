import React from 'react'

export default function Account({User}) {
  return (
    <div className='backtest-form'>
        <span>First Name:</span>
        <input type="text" min="100" value={User.first_name}/>
        <span>Last Name:</span>
        <input type="text" min="100" value={User.last_name}/>
        <span>Email:</span>
        <input type="text" min="100" value={User.email}/>
              
    </div>
  )
}
