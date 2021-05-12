
import {
    FETCH_SUCCESS,
    FETCH_FAILED
} from './type'

import axios from 'axios' //used axios library to make GET request

 export const fetchData = dispatch =>{

    const symbol = "tBTCUSD" //symbol of Cryptocurrency you want to fetch
    try {
        const response = axios.get(`/v2/ticker/${symbol}?''`)
        response.then(res=>{
            // console.log(res.data)
                dispatch({
                    type: FETCH_SUCCESS,
                    payload: res.data
                });
        })
 
    } catch (e) {
        // console.log(e);
        dispatch({
            type: FETCH_FAILED
        })
    }
}

