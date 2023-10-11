import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provaider/AuthProvider';

const LeftNavigation = () => {

    const [user, setUser] = useState([]);
    useEffect(() => {
        const person = JSON.parse(localStorage.getItem("user"))
        setUser(person)
    }, [])

    return (
        <div className='bg-white w-[300px] pt-5 h-full overflow-scroll px-5'>
            {/* profile section */}
            <Link to='/profile'> <div className='flex items-center gap-3'>
                <div className="avatar online">
                    <div className="w-10 rounded-full">
                        <img src={user?.photo} />
                    </div>
                </div>
                <h1 className='font-semibold text-black'> {user?.userName}</h1>
            </div></Link>

            <div className='my-5'>

                <Link to='/addFriend'> <div className='flex gap-3 p-1 hover:bg-slate-200   items-center '>
                    <img className='h-8 rounded-lg' src="/dualUser.png" alt="" />
                    <p className='text-base font-semibold text-black'>Friend</p>
                </div>  </Link>
                <Link to='/video'> <div className='flex gap-3 p-1 hover:bg-slate-200   items-center '>
                    <img className='h-8 rounded-xl' src="/video.png" alt="" />
                    <p className='text-base font-semibold   text-black'>Video</p>
                </div>  </Link>
                <Link to='/group'> <div className='flex gap-3 p-1 hover:bg-slate-200   items-center '>
                    <img className='h-8 rounded-full' src="/group1.png" alt="" />
                    <p className='text-base font-semibold  text-black'>Group</p>
                </div>  </Link>
                <Link to='/'> <div className='flex p-1 gap-3 hover:bg-slate-200   items-center '>
                    <img className='h-8 rounded-lg' src="/page.png" alt="" />
                    <p className='text-base font-semibold  text-black'>Pages</p>
                </div>  </Link>
                <Link to='/market-please'> <div className='flex gap-3 p-1 hover:bg-slate-200   items-center '>
                    <img className='h-8 rounded-mdzzz' src="/maeketolease.png" alt="" />
                    <p className='text-base font-semibold  text-black'> Marketplace</p>
                </div>  </Link>
                <Link to='/'> <div className='flex p-1 gap-3 hover:bg-slate-200   items-center '>
                    <img className='h-8 rounded-full' src="/memorise.png" alt="" />
                    <p className='text-base font-semibold  text-black'> Memories</p>
                </div>  </Link>
                <Link to='/'> <div className='flex p-1 hover:bg-slate-200   items-center '>
                    <img className='h-8 rounded-3xl' src="/game.png" alt="" />
                    <p className='text-base font-semibold  text-black'> Play Games</p>
                </div>  </Link>
                <Link to='/'> <div className='flex p-1 gap-3 hover:bg-slate-200   items-center '>
                    <img className='h-8 rounded-lg ' src="/dashboard.png" alt="" />
                    <p className='text-base font-semibold  text-black'>Professional Dashboard</p>
                </div>  </Link>

            </div>

            {/* short cut section */}
            <p className='text-base font-semibold '>Your ShortCuts</p>

            <div className='flex hover:bg-slate-200 items-center gap-3'>
                <div className="w-10 rounded-full">
                    <img className='p-1 rounded-full' src="/programming.png" />
                </div>
                <a target='_blank' className='font-semibold text-black' href="https://www.programming-agency.com/">Programming Agency</a></div>
        </div>


    );
};

export default LeftNavigation;