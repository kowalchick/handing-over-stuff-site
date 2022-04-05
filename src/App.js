import "./App.css";
import * as React from 'react';
import {
    BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';

import Home from "./components/Home/Home";
import Forms from "./components/Forms/Forms";
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";
import ErrPage from "./components/ErrPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/hand-over" element={<Forms />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/register" element={<Register />}/>
                <Route path="/logout" element={<Logout />}/>
                <Route path="*" element={<ErrPage />}/>
            </Routes>
        </Router>);
}
export default App;

