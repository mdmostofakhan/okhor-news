import React from 'react';
import Navbar from '../pages/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;