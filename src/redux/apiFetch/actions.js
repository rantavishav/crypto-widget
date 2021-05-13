
import {
    FETCH_SUCCESS,
    FETCH_FAILED
} from './type'

// import axios from 'axios' //used axios library to make GET request

 export const fetchData = dispatch =>{

    const symbol = "tBTCUSD" //symbol of Cryptocurrency you want to fetch

    const wss = new WebSocket(`wss://api-pub.bitfinex.com/ws/2`)  // initializing the Web Socket

    try {
        
        wss.onmessage = (msg) => {

           const data= JSON.parse(msg.data) //msg.data is giving me data in type of string so I have to change it
            
           
           return data[1] !== undefined?typeof(data[1]) !== "string" ? 
            
            // rsponse > data = [ChannelID,[Payload data]]
            // I dont know why api is sending [ChannelId, 'hb']  so i need to put a check here

            dispatch({
                type:FETCH_SUCCESS,
                payload:data[1]
            })
            //  console.log("data is", data[1][0])
             
             
             : null:null
        }

        //msg describing the channel and crypo symbol ID
        const msg = JSON.stringify({ 
        event: 'subscribe', 
        channel: 'ticker', 
        symbol: symbol 
      })
      //When socket opens
      wss.onopen = () =>{
        wss.send(msg)
      }


 
    } catch (e) {
        // console.log(e);
        dispatch({
            type: FETCH_FAILED
        })
    }
}

