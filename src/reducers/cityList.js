const cityListReducer = (state = false, action) => {
    switch(action.type){
        case 'ADD_CITY':
            return !state;
        default: 
            return state;
    }
}

export default cityListReducer;