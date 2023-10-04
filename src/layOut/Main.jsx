import React from 'react';
import Navbar from '../pages/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Footer';
import Home from '../pages/Home/Home';

const Main = () => {
    return (
        <div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;