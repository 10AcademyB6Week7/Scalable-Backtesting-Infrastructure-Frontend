import './App.css';
import Home from './components/Home';
import  logo from './logo.svg'
import {useState, useEffect}  from 'react'
import Index from './components/index/Index';
import Register from './components/register/Register';
import Login from './components/login/Login';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [isRegisterring, setIsRegisterring] = useState(false)
  const [isLoggingIn, setIsLoggingIn] = useState(false)


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
        <div className="App">
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
        <div className="App">
          <Login setIsloggedIn={setIsLoggedIn} setIsLoggingIn={setIsLoggingIn} setIsRegisterring={setIsRegisterring}/>
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
      <div className="App">
        {isLoggedIn?
        <Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>:<Index isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        }
        
      </div>
    </>
    
  );
}

export default App;
