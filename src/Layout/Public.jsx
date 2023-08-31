import React from 'react';
import { Outlet } from 'react-router-dom';

const Public = () => {
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default Public;