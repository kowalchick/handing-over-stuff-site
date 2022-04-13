import axios from "axios";

const API_URL = "http://localhost:3000/users";

const register = (email, password) => {
    return axios.post(API_URL , {
        email,
        password,
        id: email
    });
};

const login = (email, password) => {
    return axios
        .get(API_URL + `/${email}?password=${password}`, {
            email,
            password,
        })
        .then((response) => {

            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem("user");
};

export default {
    register,
    login,
    logout,
};