import * as httpRequest from '~/utils/httpRequest';

export const updateUser = (updatedData) => async (dispatch) => {
    try {
        dispatch({ type: 'CALL_API_START' });

        const response = await httpRequest.patch(`/users/updateMe`, updatedData);

        dispatch({
            type: 'UPDATE_USER_SUCCESS',
            payload: { user: response.user },
        });

        dispatch({ type: 'CALL_API_END' });
    } catch (error) {
        dispatch({
            type: 'UPDATE_USER_FAILURE',
        });

        dispatch({ type: 'CALL_API_END' });

        dispatch({
            type: 'SET_NOTIFY',
            payload: {
                message: error.message,
                status: 'FAILURE',
            },
        });

        throw error;
    }
};
