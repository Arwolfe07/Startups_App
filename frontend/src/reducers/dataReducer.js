// Stores  the data from backend
const dataReducer = (state = null, action) => {
    switch (action.type) {
        case 'FETCH_DATA':
            return action.data;
        default:
            return state;
    }
}

export default dataReducer;