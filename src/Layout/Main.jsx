import React from 'react';
import NavigationBar from '../Pages/Shared/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import LeftNavigation from '../Pages/Shared/LeftNavigation/LeftNavigation';
import RightNavigation from '../Pages/Shared/RightNavigation/RightNavigation';

const Main = () => {
    return (
        <div>
            <NavigationBar />
            <div className='flex justify-between h-[500px]'>
                <div className='h-full overflow-y-scroll '>
                    <LeftNavigation />
                </div>
                <div className='h-full overflow-y-scroll  scrollbar-w-0' >
                    <Outlet />
                    {/* <MainHome /> */}
                </div>
                <div className='h-full overflow-y-scroll'>
                    <RightNavigation />
                </div>
            </div>
        </div>
    );
};

export default Main;