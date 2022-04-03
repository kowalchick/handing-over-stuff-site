import "./App.css";
import * as React from 'react';
import {
    BrowserRouter as Router, Routes, Route, Link

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
                <Route path="/oddaj-rzeczy" element={<Forms />}/>
                <Route path="/logowanie" element={<Login />}/>
                <Route path="/rejestracja" element={<Register />}/>
                <Route path="/wylogowano" element={<Logout />}/>
                <Route path="*" element={<ErrPage />}/>
            </Routes>
        </Router>);
}
export default App;

