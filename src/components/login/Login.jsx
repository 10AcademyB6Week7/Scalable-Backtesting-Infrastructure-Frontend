import React from 'react'
import './Login.css'
import axios from 'axios'
import  loading from '../../loading2.gif'


const BASE_URL = "http://localhost:5000"

export default function Login({setIsLoggingIn, login, setIsRegisterring}) {
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [isLoading, setIsLoading] = React.useState(false)


    
    function emailOnChange(e){
        setEmail(e.target.value)
    }
    function passwordOnChange(e){
        setPassword(e.target.value)
    }

    async function handleLogin(e){
        e.preventDefault()
        if(email.length!==0 &&password.length!==0){
            try{
                setIsLoading(true)
                let response = await axios.post(`${BASE_URL}/login`, {
                    "email":email,
                    "password":password
                })
                console.log(response.data)

                let data = response.data;
                if(data!==undefined){
                    if(data.success){
                        login(data)
                    }else{
                        alert(data.error)
                    }
                }
                else{
                    alert("Something went wrong")
                }
            }catch(e){
                console.log(e)
                if(e.response.status === 401){
                    alert("Invalid email or password")
                }
                else{
                    alert(e.message)
                }
            }
            finally{
                setIsLoading(false)
            }
        }else{
            alert("All fields are required")
        }
    }
    function handleRegiseterClick(){
        setIsLoggingIn(false)
        setIsRegisterring(true)
    }
  return (
    <div>
        {isLoading &&
            <div className='loading'>
                <img src={loading}></img>
            </div>}
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
