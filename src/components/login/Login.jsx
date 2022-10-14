import React from 'react'
import './Login.css'

export default function Login({setIsLoggingIn, setIsLoggedIn, setIsRegisterring}) {
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")

    
    function emailOnChange(e){
        setEmail(e.target.value)
    }
    function passwordOnChange(e){
        setPassword(e.target.value)
    }

    async function handleLogin(){

    }
    function handleRegiseterClick(){
        setIsLoggingIn(false)
        setIsRegisterring(true)
    }
  return (
    <div>
        <div className="login-form">
            <h3>Login to your Mela account</h3>
            <form>
                <input type="text" value={email} onChange={emailOnChange} placeholder='Email:' required/>
                <input type="password" value={password} onChange={passwordOnChange} placeholder='Password:' required/>
                <div className="btnrow">
                    <button onClick={handleLogin}>Login</button>
                    <button className='registernbtn' onClick={handleRegiseterClick}>Register</button>
                </div>
                
            </form>
        </div>
    </div>
  )
}
