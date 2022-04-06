export const ACTION_SIGNIN = 'SIGNIN';

export const getSigninAction = (username, password) => ({
    payload: {
      password,
      username
    },
    type: ACTION_SIGNIN,
});

