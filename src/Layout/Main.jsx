import React from 'react';
import NavigationBar from '../Pages/Shared/NavigationBar/NavigationBar';
import { Outlet, useLocation } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import LeftNavigation from '../Pages/Shared/LeftNavigation/LeftNavigation';
import RightNavigation from '../Pages/Shared/RightNavigation/RightNavigation';

const Main = () => {
    const location = useLocation();
    // console.log(location);

    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register')
    return (

        <div className='bg-slate-100'>
            {noHeaderFooter || <NavigationBar />}
            <div className='flex justify-between h-screen'>
                <div className='h-full overflow-y-scroll '>
                   { noHeaderFooter|| <LeftNavigation />}
                </div>
                <div className='h-screen overflow-y-scroll  scrollbar-w-0' >
                    <Outlet />
                    {/* <MainHome /> */}
                </div>
                <div className='h-screen overflow-y-scroll'>
                  {noHeaderFooter||  <RightNavigation />}
                </div>
            </div>
        </div>
    );
};

export default Main;