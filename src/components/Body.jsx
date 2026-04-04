import React, {  useEffect, useState } from 'react'
import "./body.css"
import { countryList } from './country list/Countries'
 function Body() {
  const [convertFrom, setConvertFrom] = useState("USD")
  const [amount, setAmount] = useState(0)
  
  const [convertTo, setConvertTo] = useState("ETB")
  const [currency, setCurrency] = useState("")
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    setErrorMessage("")

    setIsLoading(true)
    fetch(`https://open.er-api.com/v6/latest/${convertFrom}`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.result === 'success' && data?.rates) {
          const rate = data.rates[convertTo]
          if (typeof rate === 'number') {
            setCurrency(rate)
          } else {
            setCurrency("")
            setErrorMessage(`No rate found for ${convertTo}.`)
          }
        } else {
          setCurrency("")
          const apiError = data?.["error-type"] || data?.error || "Unknown API error"
          setErrorMessage(`Error fetching rates: ${apiError}`)
          console.error("Error fetching rates:", apiError, data)
        }
      })
      .catch((err) => {
        setCurrency("")
        setErrorMessage("Network error while fetching rates.")
        console.log("fetching error ",err)
      })
      .finally(() => {
        setIsLoading(false)
      })
    
  },[convertFrom,convertTo])
  return (
    <div className="main-block">
        <div className="title">Currency Convertor</div>
        <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter Amount"/>
        <div className="from-to">
            <div className="convert-from">
                <div className="from-text">From</div>
                <div className="image-select">
                    <img className="from-image" src={`https://flagsapi.com/${countryList[convertFrom]}/flat/64.png`} alt=""/>
                    <div className="select-block">
                      <select name="" value={convertFrom} onChange={(e)=>setConvertFrom(e.target.value)} id="from-select" className="select-tag">
                        
                        {
                          Object.keys(countryList).map((keys, value) => {
                            return <option key={value}>{keys}</option>
                          })
                          }
                        
                      </select>
                    </div>
                </div>
            </div>
            <img className="convertor" src="/convert.png" alt=""/>
            <div className="convert-to">
                <div className="to-text">TO</div>
                <div className="image-select">
                    <img className="to-flag" src={`https://flagsapi.com/${countryList[convertTo]}/flat/64.png`} alt=""/>
                    <div className="select-block">
                    <select name="" id="to-select" value={convertTo} onChange={(e)=>setConvertTo(e.target.value)}  className="select-tag">
                        {
                          Object.keys(countryList).map((keys,value) => {
                            return (
                              <option key={value}>{keys}</option>)
                          })
                          }
                        </select>
                    </div>
                </div>
            </div>
        </div>
      <div className="currency-display">
        <h3>Conversions Result Here👇👇👇:</h3>
        <h4>
          {isLoading
            ? "waiting..."
            : errorMessage
              ? errorMessage
              : `${amount === "" ? 0 : amount}${convertFrom} = ${(Number(amount) * Number(currency)).toFixed(2)}${convertTo}`}
        </h4>
        </div>
    </div>
  )
}

export default Body

