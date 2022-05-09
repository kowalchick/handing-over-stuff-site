import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE,
    ACTION_INIT,
} from "./actionTypes";

import AuthService from "../../services/authService";

export const register = (email, password) => (dispatch) => {
    // Staraj się nie używać dwuargumentowego `then`, bo jest on nieco mniej czytelny od
    // użycia `then()` a po nim odpowiadającego bloku `.catch()`
   // np. myPromise.then(result => console.log(result)).catch(err => console.error(err));
    return AuthService.register(email, password).then(
        (response) => {
            dispatch({
                type: REGISTER_SUCCESS,
            });

            // Takie ustawianie wiadomości najczęściej należy bardziej do UI/komponentów.
           // Można to zrobić np. umieszczając `useEffect` w reakcji na zmianę danych w store
            dispatch({
                type: SET_MESSAGE,
                payload: response.data.message,
            });

            // Możesz to pominąć, ten kod powinien z założenia zwrócić Promise, bo używa Redux Thunk
            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({
                type: REGISTER_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            // Nie musisz tu chyba dalej reject-ować Promise, wystarczy obsłużyć błąd w reduxie
            return Promise.reject();
        }
    );
};

export const login = (email, password) => (dispatch) => {
    return AuthService.login(email, password).then(
        (data) => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: { user: data },
            });

            return Promise.resolve();
        },
        (error) => {
          // Powtórzony blok kodu - warto wyciąć go gdzieś i re-użyć
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({
                type: LOGIN_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    );
};

export const logout = () => (dispatch) => {
    AuthService.logout();

    dispatch({
        type: LOGOUT,
    });
};

export const initUser = () => {
  const user = localStorage.getItem("user");
  return {
      type: ACTION_INIT,
      payload: user,
  }
};