import React, {useContext} from 'react';
import NavMenu from './NavMenu';
import LogForm from './Forms/LogForm';
// import {initialState} from "../redux/reducer";

const Login = () => {
    // const [user] = useContext(initialState);
    return (
        <>
            <NavMenu />
                <LogForm />
        </>
    );
};
export default Login;

