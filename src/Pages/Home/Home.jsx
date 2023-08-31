import React from 'react';
import MainHome from '../Shared/LeftNavigation/MainHome/MainHome';


const Home = () => {
    return (
        <div className='flex justify-between h-[500px]'>
            <div className='h-full overflow-y-scroll '>

            </div>
            <div className='h-full overflow-y-scroll  scrollbar-w-0' >

                <MainHome />
            </div>

        </div>
    );
};

export default Home;