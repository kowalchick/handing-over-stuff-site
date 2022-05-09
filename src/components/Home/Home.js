import React from 'react';

import NavMenu from "../NavMenu";
import FooterForm from "../FooterForm";

import Header from './Header';
import ThreeColumns from './ThreeColumns';
import Steps from "./Steps";
import About from "./About";
import WhoHelp from "./WhoHelp/WhoHelp";

const Home = () => {
    return (
        <>
            <NavMenu />
            <Header />
            <ThreeColumns />
            <Steps />
            <About />
            <WhoHelp />
            <FooterForm />
        </>
    );
}

export default Home;