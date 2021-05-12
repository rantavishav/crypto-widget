import {
    FETCH_SUCCESS,
    FETCH_FAILED
} from './type'

const intialState = {

    BID: 0, 
    BID_SIZE: 0, 
    ASK: 0, 
    ASK_SIZE: 0, 
    DAILY_CHANGE: 0, 
    DAILY_CHANGE_RELATIVE: 0, 
    LAST_PRICE: 0, 
    VOLUME: 0, 
    HIGH: 0, 
    LOW: 0
};

export default (state = intialState, actions) =>{
    switch(actions.type) {
        case FETCH_SUCCESS:
            return{
                ...state,
                BID: actions.payload[0], 
                BID_SIZE: actions.payload[1], 
                ASK: actions.payload[2], 
                ASK_SIZE: actions.payload[3], 
                DAILY_CHANGE: actions.payload[4], 
                DAILY_CHANGE_RELATIVE: actions.payload[5], 
                LAST_PRICE: actions.payload[6], 
                VOLUME: actions.payload[7], 
                HIGH: actions.payload[8], 
                LOW: actions.payload[9]
            }
        case FETCH_FAILED:
            return{
                ...state
            
            }  
            
        default:
                return state;
    }
}