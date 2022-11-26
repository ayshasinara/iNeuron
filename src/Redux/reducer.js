import * as types from "./actionTypes"

const initialState = {
    data: [],
    isLoading: false,
    isError: false
};

export default (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case types.GET_USER_DATA_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false
            };
        case types.GET_USER_DATA_SUCCESS:
            return {
                ...state,
                data: payload,
                isLoading: false,
                isError: false
            };
        case types.GET_USER_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            };
        case types.POST_USER_DATA_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false
            };
        case types.POST_USER_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false
            };
        case types.POST_USER_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            };
        case types.DELETE_USER_DATA_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false
            };
        case types.DELETE_USER_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false
            };
        case types.DELETE_USER_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            };
        case types.EDIT_USER_DATA_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false
            };
        case types.EDIT_USER_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false
            };
        case types.EDIT_USER_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            };


        default:
            return state;
    }
};
