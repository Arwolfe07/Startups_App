// Stores the details of the card being clicked
const showDetailsReducer = (state = { details: null, show: false }, action) => {
    switch (action.type) {
        case 'SHOW':
            return { details: action.details, show: true };
        case 'NOT_SHOW':
            return { details: null, show: false };
        default:
            return state;
    }
}

export default showDetailsReducer;