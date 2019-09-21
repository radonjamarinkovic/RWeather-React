
//const initialState = null;

const searchReducer = (state = {}, action) => {
    switch(action.type){
        case 'SEARCH_RESULT':
            return   state = action.payload
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

export default searchReducer;