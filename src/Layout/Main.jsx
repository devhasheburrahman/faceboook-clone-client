import React from 'react';
import NavigationBar from '../Pages/Shared/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';
import Home from '../Pages/Home/Home';

const Main = () => {
    return (
        <div>
            <NavigationBar />
            <Outlet />

        </div>
    );
};

export default Main;