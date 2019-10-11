export const updateLastName = (updatedLastName) => {
    return dispatch => {
        dispatch({
            type: 'UPDATE_LAST_NAME',
            payload: updatedLastName
        });
        return null;
    }
}