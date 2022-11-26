import * as types from "./actionTypes"
import axios from "axios"

const get_data = () => (dispatch) => {
    dispatch({ type: types.GET_USER_DATA_REQUEST })
    return axios
        .get("https://blue-journalist-bbrpv.ineuron.app:4000/users")
        .then((res) => {
            return dispatch({
                type: types.GET_USER_DATA_SUCCESS,
                payload: res.data.data
            })
        }).catch((err) => {
            dispatch({ type: types.GET_USER_DATA_FAILURE })
        })
}

const post_data = (payload) => (dispatch) => {
    dispatch({ type: types.POST_USER_DATA_REQUEST })
    return axios
        .post("https://blue-journalist-bbrpv.ineuron.app:4000/user/create", payload)
        .then(() => {
            return dispatch({
                type: types.POST_USER_DATA_SUCCESS

            })
        }).catch((err) => {
            dispatch({ type: types.POST_USER_DATA_FAILURE })
        })
}

const delete_user_data = (id) => (dispatch) => {
    dispatch({ type: types.DELETE_USER_DATA_REQUEST })
    return axios
        .delete(`https://blue-journalist-bbrpv.ineuron.app:4000/user/${id}`)
        .then(() => {
            return dispatch({
                type: types.DELETE_USER_DATA_SUCCESS
            })
        }).catch((err) => {
            dispatch({ type: types.DELETE_USER_DATA_FAILURE })
        })
}

const edit_user_data = (payload, id) => (dispatch) => {
    console.log(payload)
    dispatch({ type: types.EDIT_USER_DATA_REQUEST })
    return axios
        .patch(`https://blue-journalist-bbrpv.ineuron.app:4000/user/${id}`, payload)
        .then((res) => {
            return dispatch({
                type: types.EDIT_USER_DATA_SUCCESS,
              
            })
        }).catch((err) => {
            dispatch({ type: types.EDIT_USER_DATA_FAILURE })
        })
}

export { get_data, post_data, delete_user_data, edit_user_data }