// import * as actions from './actionTypes';
//
// export const getSigninAction = (email, password) => ({
//     type: actions.ACTION_SIGNIN,
//     payload: {
//       password,
//       email
//     },
//
// });
// export const getSignOutAction = (email, password) => ({
//     type: actions.ACTION_SIGNOUT,
//     payload: {
//
//     },
// });
import { SET_CURRENT_USER, REGISTER_SUCCESS, LOGOUT, GET_ERRORS } from "./actionTypes";

export function setCurrentUser(user) {
    return {
        type: SET_CURRENT_USER,
        payload: user
    }
}

export function registerSuccess() {
    return {
        type: REGISTER_SUCCESS
    }
}

export function logoutUser() {
    return {
        type: LOGOUT
    }
}

export function getErrors(errors) {
    return {
        type: GET_ERRORS,
        payload: errors
    }
}
