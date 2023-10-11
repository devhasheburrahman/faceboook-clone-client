import React from 'react';
import {
    createBrowserRouter,

} from "react-router-dom";
import Login from '../Pages/Shared/Login/Login';
import Register from '../Pages/Shared/Register/Register';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
import Setting from '../Pages/Shared/Setting/Setting';
import AddPeople from '../Pages/AddPeople/AddPeople';
import Video from '../Pages/VIdeo/Video';
import MarketPlease from '../Pages/MarketPlease/MarketPlease';
import Group from '../Pages/Group/Group';
import Profile from '../Pages/Profile/Profile';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/profile',
                element: <Profile />
            },

            {
                path: '/setting',
                element: <Setting />
            },
            {
                path: '/addFriend',
                element: <AddPeople />

            },
            {
                path: '/video',
                element: <AddPeople />
            },
            {
                path: '/group',
                element: <Group />
            },
            {
                path: '/market-please',
                element: <MarketPlease />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },

        ]


    },

]);

export default router;