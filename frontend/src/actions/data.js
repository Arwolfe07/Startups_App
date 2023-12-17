import * as api from '../apis';

// Action used to fetch all the data and store it in Redux Store
export const fetchData = () => async (dispatch) => {
    try {
        // loading icon display
        dispatch({ type: 'SEARCH_STARTED' })
        const { data } = await api.fetchData();
        dispatch({ type: 'FETCH_DATA', data: data });
        // loading icon display end
        dispatch({ type: 'SEARCH_END' });
    } catch (err) {
        console.log(err);
    }
}

// Action used to add new data to DB and get back data and store the refreshed data into Redux Store
export const addData = (startData, navigate, addToast) => async (dispatch) => {
    try {
        dispatch({ type: 'SEARCH_END' });
        const { data } = await api.addData(startData);
        dispatch({ type: 'FETCH_DATA', data: data });
        navigate('/allstartups', { replace: true });
        dispatch({ type: 'SEARCH_END' });
        // Add a success message to show that everything is fine
        addToast("Startup Added Successfully", {
            appearance: "success",
            autoDismiss: true,
        });
    } catch (err) {
        // If there's an error then we will display the errors on the form
        addToast(`Error: ${err.response.data.message}`, {
            appearance: "error",
            autoDismiss: true,
        });
        console.log(err);
    }

}