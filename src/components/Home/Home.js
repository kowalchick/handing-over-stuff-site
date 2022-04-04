import React from 'react';
import Header from './Header';
import NavMenu from "../NavMenu";
import ThreeColumns from './ThreeColumns';
import Steps from "./Steps";
import About from "./About";
import FooterForm from "../FooterForm";

const Home = () => {
    return (
        <>
            <NavMenu />
            <Header />
            <ThreeColumns />
            <Steps />
            <About />
            <FooterForm />
        </>
    );
}

export default Home;