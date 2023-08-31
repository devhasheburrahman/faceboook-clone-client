import React from 'react';
import LeftNavigation from '../Shared/LeftNavigation/LeftNavigation';
import RightNavigation from '../Shared/RightNavigation/RightNavigation';
import MainHome from '../Shared/LeftNavigation/MainHome/MainHome';

const Home = () => {
    return (
        <div className='flex justify-between h-[500px]'>
            <div className='h-full overflow-y-scroll '>
                <LeftNavigation />
            </div>
            <div className='h-full overflow-y-scroll  scrollbar-w-0' >
                <MainHome />
            </div>
            <div className='h-full overflow-y-scroll'>
                <RightNavigation />
            </div>
        </div>
    );
};

export default Home;