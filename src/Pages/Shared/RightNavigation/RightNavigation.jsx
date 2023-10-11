import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provaider/AuthProvider';

const RightNavigation = () => {
    const [user, setUser] = useState()
    // const { user } = useContext(AuthContext);

    useEffect(() => {
        const loggedUser = JSON.parse(localStorage.getItem("user"))
        setUser(loggedUser)

    }, [])


    return (
        <div className='bg-white p-3  h-full  '>
            <Link to='/profile'>
                <div className='flex shadow-2xl  items-center gap-3'>
                    <div className='avatar'>
                        <div className="w-10 rounded-full">
                            <img src={user?.photo} />
                        </div>
                    </div>
                    <h1 className='font-semibold text-sm text-black'>{user?.userName}</h1>
                </div>
            </Link>
        </div>
    );
};

export default RightNavigation;