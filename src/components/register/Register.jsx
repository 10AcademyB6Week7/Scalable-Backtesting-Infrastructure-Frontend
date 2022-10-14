import React from 'react'
import './Register.css'

export default function Register({setIsRegisterring, setIsLoggingIn}) {
    const [email, setEmail] = React.useState("")
    const [firstName, setFirstName] = React.useState("")
    const [lastName, setLastName] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [confirmPassword, setConfirmPassword] = React.useState("")

    
    function firstNameOnChange(e){
        setFirstName(e.target.value)
    }
    function lastNameOnChange(e){
        setLastName(e.target.value)
    }
    function emailOnChange(e){
        setEmail(e.target.value)
    }
    function passwordOnChange(e){
        setPassword(e.target.value)
    }
    function confirmPasswordOnChange(e){
        setConfirmPassword(e.target.value)
    }

    async function handleRegister(e){
        e.preventDefault()

    }

    function handleLoginClick(){
        setIsLoggingIn(true)
        setIsRegisterring(false)
    }


  return (
    <div>
        <div className="register-form">
            <h3>Register to Mela</h3>
            <form>
                <input type="text" value={firstName} onChange={firstNameOnChange} placeholder='First Name:' required/>
                <input type="text" value={lastName} onChange={lastNameOnChange} placeholder='Last Name:' required/>
                <input type="text" value={email} onChange={emailOnChange} placeholder='Email:' required/>
                <input type="password" value={password} onChange={passwordOnChange} placeholder='Password:' required/>
                <input type="password" value={confirmPassword} onChange={confirmPasswordOnChange} placeholder='Confirm Password:' required/>
                <div className="btnrow">
                    <button onClick={handleRegister}>Register</button>
                    <button className='loginbtn' onClick={handleLoginClick}>Login</button>
                </div>
                
            </form>
        </div>
    </div>
  )
}