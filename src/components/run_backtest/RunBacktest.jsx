import React, { useState, useEffect } from 'react'
import './RunBacktest.css'
import Collapse from "@kunukn/react-collapse";
import Down from "./Down";

const ls = ['BTC-USD', 'ETH', 'AMZN']
const indicators_list = ['sma', 'bbands']

export default function RunBacktest({setIsLoading}) {
    const [initCash, setinitCash] = useState(1000)
    const [coins, setCoins] = useState([])
    const [indicators, setIndicators] = useState([])
    const [selectedCoin, setSelectedCoin] = useState('')
    const [selectedindicator, setSelectedIndicator] = useState('')
    const [startDate, setStartDate] = useState('2022-10-13')
    const [endDate, setEndDate] = useState('2022-10-15')

    const [isOpen, setIsOpen] = useState(false)


    useEffect(()=>{
        setCoins(ls)
        setSelectedCoin(ls[0])
        setIndicators(indicators_list)
        setSelectedIndicator(indicators_list[0])
    },[])


    function initCashOnChange(e){
        setinitCash(e.target.value)
    }
    function startDateOnChange(e){
        setStartDate(e.target.value)
    }
    function endDateOnChange(e){
        setEndDate(e.target.value)
    }
    const handleChange = (event) => {
        setSelectedCoin(event.target.value);
    };
    const handleIndicatorChange = (event) => {
        setSelectedIndicator(event.target.value);
    };
    async function runTest(){

    }

    const Dropdown = ({ label, value, options, onChange })=>{
        return (
            <>
                <span>{label}</span>
                <br />
                <select value={value} onChange={onChange}>
                {options.map((option) => (
                    <option value={option} key={option}>{option}</option>
                ))}
                </select>
            </>
        );
    }

    function Block({ isOpen, title, onToggle, children }) {
        return (
          <div className="block">
            <button className="btnt toggle" onClick={onToggle}>
              <span>{title}</span>
              <Down isOpen={isOpen} />
            </button>
            <Collapse layoutEffect isOpen={isOpen}>
              {children}
            </Collapse>
          </div>
        );
      }

  return (
    <div>
        <div className="backtest-form">
            <form>
                <Dropdown label="Select Coin" value={selectedCoin} onChange={handleChange} options={coins}/>
                <br />
                <Dropdown label="Select Inidcator" value={selectedindicator} onChange={handleIndicatorChange} options={indicators}/>
                <br />
                <span>Initial Cash:</span>
                <input type="number" min="100" value={initCash} onChange={initCashOnChange} placeholder='Initial Cash:' required/>
                <span>Start Date:</span>
                <input type="date" value={startDate} onChange={startDateOnChange} placeholder='Start Date:'/>
                <span>End Date:</span>
                <input type="date" value={endDate} onChange={endDateOnChange} placeholder='End Date:'/>
                
                <Block
                    title="Optional Variables"
                    isOpen={isOpen}
                    onToggle={() => setIsOpen(!isOpen)}
                >
                    <div className="content">
                    <p>Paragraph of text.</p>
                    <p>Another paragraph.</p>
                    <p>Other content.</p>
                    </div>
                </Block>

                <div className="btn-div">
                    <button onClick={runTest}>Run</button>
                </div>
            </form>
        </div>
    </div>
  )
}
