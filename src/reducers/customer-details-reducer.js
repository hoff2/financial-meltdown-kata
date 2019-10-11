import CustomerDetailsData from "../state/customer-details-data";

const updateLastName = (state, action) => {
    return CustomerDetailsData.update(state, {
        lastName: {
            $set: action.payload
        }
    })
};

const customerDetailsReducer = (state, action) => {
    const reducers = {
        ['UPDATE_LAST_NAME']: updateLastName
    };

    const reducer = reducers[action.type];

    return reducer ? reducer(state, action): state;
};

export default customerDetailsReducer;