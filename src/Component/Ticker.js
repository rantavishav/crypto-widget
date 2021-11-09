import "./Ticker.css";

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/apiFetch/actions'
import image from '../assets/images/BTC.png'
export default function Ticker() {

 
  const dispatch = useDispatch();
 

  useEffect(()=>{
  
 
     dispatch(fetchData)
  },[])



  
  const data = useSelector(state => state.apiFetch); //Fetch data from the state

    return (
      <div className="container">
      <img src={image}      alt="bitcoin img" />
        <div className="col1">
          <h3>BTC/USD</h3>
          <h4>
            {" "}
            VOL <span>{data.VOLUME}</span> BTC
          </h4>
          <h4>
            LOW <span>{data.LOW}</span>
          </h4>
        </div>
        <div className="col2">
          <h3>{data.ASK}</h3>
  
          <h4 style={data.DAILY_CHANGE>0 ? {color:"green"}:{color:"red"}}>{data.DAILY_CHANGE}
          ({data.DAILY_CHANGE_RELATIVE}%)</h4>
          <h4>
            HIGH <span>{data.HIGH}</span>
          </h4>

        </div>

      </div>
    );
  }
      
