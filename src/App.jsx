import React, { useEffect } from 'react';
import { SERVER_URL } from './Config/constant';
import router from './Routes/Router';
import { RouterProvider } from 'react-router-dom';
import axios from 'axios';

const App = () => {

    useEffect(() => {
        axios.defaults.baseURL = SERVER_URL
    }, [])
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
};

export default App; 
