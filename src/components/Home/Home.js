import React from 'react';
import Header from './Header';
import NavMenu from "../NavMenu";
import ThreeColumns from './ThreeColumns';

function Home() {
    return (
        <>
            <NavMenu />
            <Header />
            <ThreeColumns />
        </>
    );
}

export default Home;