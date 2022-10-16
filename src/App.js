import './App.css';
import Home from './components/Home';
import  logo from './logo.svg'
import {useState, useEffect}  from 'react'
import Index from './components/index/Index';
import Register from './components/register/Register';
import Login from './components/login/Login';
import  bg from './header-2.png'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isRegisterring, setIsRegisterring] = useState(false)
  const [isLoggingIn, setIsLoggingIn] = useState(false)
  const [user, setUser] = useState(null)


  function handleLogIn(){
    if(isLoggedIn){
      setIsLoggedIn(false)
    }
    else{
      setIsLoggingIn(true)
    }
  }
  function handleRegister(){
    setIsRegisterring(true)
  }
  function handleHome(){
    setIsRegisterring(false)
    setIsLoggingIn(false)
  }
  function login(user){
    setIsLoggingIn(false)
    setUser(user)
    setIsLoggedIn(true)
  }

  if(isRegisterring){
    return(
      <>
        <ul>
          <li>
            <div className='' style={{justifyContent:'center', paddingTop:'6px'}}>
                <img src={logo}></img>
            </div>
          </li>
          <li><button className='homebtn' onClick={handleHome} >Mela</button></li>
        </ul>
        <div className="home-app">
          <Register setIsRegisterring={setIsRegisterring} setIsLoggingIn={setIsLoggingIn}/>
        </div>
      </>
    )
  }
  if(isLoggingIn){
    return(
      <>
        <ul>
          <li>
            <div className='' style={{justifyContent:'center', paddingTop:'6px'}}>
                <img src={logo}></img>
            </div>
          </li>
          <li><button className='homebtn' onClick={handleHome} >Mela</button></li>
        </ul>
        <div className="home-app">
          <Login login={login} setIsLoggingIn={setIsLoggingIn} setIsRegisterring={setIsRegisterring}/>
        </div>
      </>
    )
  }

  return (
    <>
      <div>
        <ul>
          <li>
            <div className='' style={{justifyContent:'center', paddingTop:'6px'}}>
                <img src={logo}></img>
            </div>
          </li>
          <li><a href="#">Mela</a></li>
          <div className='nav-btns'>
            <li>
              <button onClick={handleLogIn}>
                {isLoggedIn ? 'Logout': 'Login'}
              </button></li>
            {!isLoggedIn && <li><button onClick={handleRegister}>Register</button></li>}
          </div>
        </ul>
      </div>
      <div>
        {isLoggedIn?
        <div className="home-app">
          <Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} User={user}/>
        </div>
        :<Index isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        }
        
      </div>
    </>
    
  );
}

export default App;
