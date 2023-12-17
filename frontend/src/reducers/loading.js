// Reducer for getting the loading state - returns true and false
const loadingReducer = (state=false,action)=>{
    switch(action.type){
        case 'SEARCH_STARTED':
            return true;
        case 'SEARCH_END':
            return false;
        default:
            return state;
    }
}

export default loadingReducer;