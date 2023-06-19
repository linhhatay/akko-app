const initialState = {
    data: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_USER_SUCCESS':
            return { ...state, data: action.payload };
        case 'UPDATE_USER_FAILURE':
            return { ...state, data: null };
        default:
            return state;
    }
};

export default userReducer;
