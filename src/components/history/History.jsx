import React, {useEffect, useState} from 'react'
import './History.css'
import axios from 'axios'

const ls = [
    {
        "id":1,
        "coin_name": "BTC",
        "end_date": "2022-10-15",
        "initial_cash": "1000",
        "result": {
            "losing_trades": "nan",
            "max_drawdown": "nan",
            "number_of_trades": "0",
            "returns": "0.0",
            "sharpe_ratio": "Infinity",
            "winning_trades": "nan"
        },
        "start_date": "2022-10-04"
    },
    {
        "id":2,
        "coin_name": "BTC",
        "end_date": "2022-10-15",
        "initial_cash": "1000",
        "result": {
            "losing_trades": "nan",
            "max_drawdown": "nan",
            "number_of_trades": "0",
            "returns": "0.0",
            "sharpe_ratio": "Infinity",
            "winning_trades": "nan"
        },
        "start_date": "2022-10-04"
    },
]

const BASE_URL = "http://localhost:5000"

export default function History({User, setIsLoading}) {
    const [historyls, setHistory] = useState([])


    useEffect(()=>{
        setIsLoading(true)
        getHistory()
        // setHistory(ls)
        setIsLoading(false)
    },[])

    async function getHistory(){
        try{
            let response = await axios.post(`${BASE_URL}/backtest_results`, {
                "user_id":User.id,
            })
            console.log(response.data)

            let data = response.data;
            if(data!==undefined){
                if(data.success){
                    setHistory(data.backtests_results)
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
    <div className=''>
        {historyls.length ===0&&<p>No backtest results found</p>}
        <table id="data">
            <thead>
                <tr>
                    <th>Coin Name</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Initial Cash</th>
                    <th>Result</th>
                </tr>
            </thead>
            <tbody>
                {historyls.map((d)=>(
                    <tr key={d.id}>
                        <td>{d.coin_name}</td>
                        <td>{d.start_date}</td>
                        <td>{d.end_date}</td>
                        <td>{d.initial_cash}</td>
                        <td>
                            <tr>
                                <td>Losing Trades</td>
                                <td>{d.result.losing_trades}</td>
                            </tr>
                            <tr>
                                <td>Max Drawdown</td>
                                <td>{d.result.max_drawdown}</td>
                            </tr>
                            <tr>
                                <td>Total Trades</td>
                                <td>{d.result.number_of_trades}</td>
                            </tr>
                            <tr>
                                <td>Return</td>
                                <td>{d.result.returns}</td>
                            </tr>
                            <tr>
                                <td>Sahrpe Ratio</td>
                                <td>{d.result.sharpe_ratio}</td>
                            </tr>
                            <tr>
                                <td>Winning Trades</td>
                                <td>{d.result.winning_trades}</td>
                            </tr>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
