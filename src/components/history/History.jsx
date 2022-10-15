import React, {useEffect, useState} from 'react'
import './History.css'
import axios from 'axios'


const BASE_URL = "http://localhost:5000"

export default function History({User, setIsLoading}) {
    const [history, setHistory] = useState(null)


    useEffect(()=>{
        setIsLoading(true)
        //  getHistory()
        setIsLoading(false)
    },[])

    async function getHistory(){
        try{
            let response = await axios.post(`${BASE_URL}/login`, {
                
            })
            console.log(response.data)

            let data = response.data;
            if(data!==undefined){
                if(data.success){
                    
                }else{
                    alert(data.error)
                }
            }
            else{
                alert("Something went wrong")
            }
        }catch(e){
            console.log(e)
            alert(e.message)
        }
    }

  return (
    <div>History{User.first_name}</div>
  )
}
