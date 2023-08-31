import React from 'react';
import { Link } from 'react-router-dom';

const RightNavigation = () => {
    return (
        <div className='bg-white p-3  h-full w-[220px]'>
            <Link to='/profile'> <div className='flex shadow-2xl  items-center gap-3'>
                <div className="w-10 rounded-full">
                    <img src="https://i.ibb.co/Ybc5Jqs/home-banner.png" />
                </div>
                <h1 className='font-semibold text-black'>Hashebur Rahman</h1>
            </div></Link>
        </div>
    );
};

export default RightNavigation;