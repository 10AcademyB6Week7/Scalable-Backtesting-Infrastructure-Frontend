
import React, {useState, useEffect}  from 'react'
import axios from 'axios'
import './Home.css'
import loading from '../loading2.gif';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import RunBacktest from './run_backtest/RunBacktest';
import History from './history/History';
import Account from './account/Account';


const BASE_URL = "http://127.0.0.1:8000/api"
// const BASE_URL = "https://algorand-endpoint.herokuapp.com/api"



function Home({isLoggedIn, setIsLoggedIn, User}) {
    // const [response, setResponse] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [isAccountSelected, setIsAccountSelected] = useState(false)
    const [accounts, setAccounts] = useState([])
    const [selectedAccount, setSetselectedAccount] = React.useState('');

    const [isAdmin, setIsAdmin] = useState(false)
    const [isTrainee, setIsTrainee] = useState(false)

    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);

    const [isAdminChecked, setIsAdminChecked] = useState(false);

    const handleCheckOnChange = () => {
        setIsAdminChecked(!isAdminChecked);
      };

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    function firstNameOnChange(e){
        setFirstName(e.target.value)
    }
    function lastNameOnChange(e){
        setLastName(e.target.value)
    }


    useEffect(()=>{
        setIsLoading(true)
        setIsLoading(false)
      },[])

    async function getAccounts(){}

    const Dropdown = ({ label, value, options, onChange })=>{
        return (
            <>
              <p>{label}</p>
              <select value={value} onChange={onChange}>
                {options.map((option) => (
                  <option value={option} key={option}>{option}</option>
                ))}
              </select>
            </>
          );
    }

    const handleChange = (event) => {
        setSetselectedAccount(event.target.value);
    };

    async function nextButtonClicked(e){
        e.preventDefault()
        setIsLoading(true)
        console.log(selectedAccount)
        try{
            let response = await axios.post(`${BASE_URL}/check_account`, {
                'address': selectedAccount
            })
            console.log(response.data)
            let data = response.data;
            if(data!==undefined){
                if(data.success){
                    console.log("REGISTERED")
                    if(data.account.is_admin){
                        setIsAdmin(true)
                    }
                    else{
                        setIsTrainee(true)
                    }
                }
                else{
                    if(data.status_code!==undefined){
                        if(data.status_code === 111){
                            console.log("REGISTER")
                            setOpen(o => !o)
                        }
                    }
                    else{
                        alert(data.message)
                    }
                }
            }else{
                alert("Something went wrong")
            }
        }
        catch(e){
            alert(e.message)
        }
        finally{
            setIsLoading(false)
        }
    }

    async function registerButtonClicked(e){
        e.preventDefault()
        console.log("Registering")
        console.log(firstName)
        console.log(lastName)

        if(firstName.length != 0 && lastName.length!=0){
            try{
                setIsLoading(true)
                let response = await axios.post(`${BASE_URL}/create_account`, {
                    'address': selectedAccount,
                    'first_name': firstName,
                    'last_name': lastName,
                    'is_admin':isAdminChecked
                })
                console.log(response.data)
                
                let data = response.data;
                if(data!==undefined){
                    if(data.success){
                        setOpen(false)
                        if(data.account.is_admin){
                            setIsAdmin(true)
                        }
                        else{
                            setIsTrainee(true)
                        }
                    }
                    else{
                        alert(data.message)
                    }
                }else{
                    alert("Something went wrong")
                }
            }
            catch(e){
                alert(e.message)
            }
            finally{
                setIsLoading(false)
            }
        }
        else{
            alert("All fields are required.")
        }
    }

    async function create_asset_request(){
        try{
            setIsLoading(true)
            let response = await axios.post(`${BASE_URL}/create_trainee_request`, {
                'address': selectedAccount
            })
            console.log(response.data)
            
            let data = response.data;
            if(data!==undefined){
                alert(data.message)
            }else{
                alert("Something went wrong")
            }
        }
        catch(e){
            alert(e.message)
        }
        finally{
            setIsLoading(false)
        }
    }

    function logout(){
        setIsAdmin(false)
        setIsTrainee(false)
    }


    return (
        <div className='home-div'>
            {isLoading &&
                <div className='loading'>
                    <img src={loading}></img>
                </div>}
                <span>Welcome to MeLa: <strong>{User.first_name} {User.last_name}</strong></span>
            <Tabs>
                <TabList style={{backgroundColor:'white'}}>
                    <Tab>Run Backtest</Tab>
                    <Tab>History</Tab>
                    <Tab>Account</Tab>
                    <Tab>Upgrade plan</Tab>
                </TabList>
                <TabPanel>
                    <h2>Run Backtest</h2>
                    <RunBacktest setIsLoading={setIsLoading} User={User}/>
                </TabPanel>
                <TabPanel>
                    <h2>History</h2>
                    <History User={User} setIsLoading={setIsLoading}/>
                </TabPanel>
                <TabPanel>
                    <h2>Account</h2>
                    <Account User={User}/>
                </TabPanel>
                <TabPanel>
                    <h2>Upgrade plan</h2>
                    
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default Home