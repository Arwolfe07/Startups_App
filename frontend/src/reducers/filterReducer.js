// Searches and filters the data as per the startup-name and category 
const filterReducer = (state = { category: 'All', searchedName: '' }, action) => {
    switch (action.type) {
        case 'SET_FILTER':
            return { ...state, category: action.value };
        case 'SET_SEARCH':
            return { ...state, searchedName: action.value };
        default:
            return state;
    }
}

export default filterReducer;