import * as actions from './actionTypes';

export const getSigninAction = (email, password) => ({
    type: actions.ACTION_SIGNIN,
    payload: {
      password,
      email
    },

});
export const getSignOutAction = (email, password) => ({
    type: actions.ACTION_SIGNOUT,
    payload: {

    },
});

