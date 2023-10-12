import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiBell, FiChevronRight, FiGift, FiHelpCircle, FiHome, FiSettings, FiUpload, FiUsers, FiYoutube } from "react-icons/fi";
import { FaFacebookMessenger } from "react-icons/fa";
import { AuthContext } from '../../../Provaider/AuthProvider';
import { SERVER_URL } from '../../../Config/constant';
import { Paper } from '@mui/material';



const NavigationBar = () => {
    const [item, setItem] = useState('')
    // const { logOut, user } = useContext(AuthContext);
    const navigate = useNavigate()

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"))
        setItem(user)
    }, [])
    console.log(item);

    // useEffect(() => {
    //     if (!user) return navigate('/login')
    // }, [])


    const handleLogout = () => {
        localStorage.clear();
        // navigate('/logIn')
    }

    return (
        <div>
            <div className="navbar bg-white  shadow-lg px-5">
                <div className="flex-1">
                    <Link to="/"><img className='h-10' src="/logo.png" alt="" /></Link>
                    <div className="form-control">
                        <div className="input-group ml-2">
                            <button className=" bg-slate-100 pl-2  btn-square">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                            <input type="text" placeholder="Search Facebook" className="input outline-none  bg-slate-100" />

                        </div>
                    </div>
                    <div className='flex  ml-10  items-center gap-24'>
                        <p title='Home' ><Link to="/"> <FiHome className='text-[30px] text-slate-500  ' /></Link></p>

                        <p title='Friend' ><Link to='/addFriend'> <FiUsers className='text-[30px] text-slate-500  ' /></Link></p>
                        <p title='Video' ><Link to='/video'> <FiYoutube className='text-[30px] text-slate-500  ' /></Link></p>
                        <p title='Group' ><Link to='/group'> <img className='h-[33px] rounded-full' src="/group.png" alt="" />  </Link></p>
                        <p title='Marketplaces' ><Link to='/market-please'> <FiGift className='text-[30px] text-slate-500  ' /></Link></p>
                    </div>
                </div>
                <div>
                    <FaFacebookMessenger title='Messenger' className='text-[30px]  text-black   ' />
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">

                            <div className="indicator">

                                <FiBell className='text-[30px]  rounded-full' />
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </label>

                    </div>

                    <div className="drawer drawer-end">
                        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            {/* Page content here */}
                            <label htmlFor="my-drawer-4" tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className='avatar'>
                                    <div className="w-10 rounded-full">
                                        <img src={item?.photo} />
                                    </div>
                                </div>
                            </label>
                        </div>

                        <div className="drawer-side">
                            <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                            <ul className="menu p-4 w-80  min-h-full bg-white text-base-content">
                                {/* Sidebar content here */}

                                <Paper className='flex flex-col gap-3'>
                                    <Paper>
                                        <li className='shadow-sm font-bold text-black'><Link to='/profile'>
                                            <div className='avatar'>
                                                <div className="w-10 rounded-full">
                                                    <img src={item?.photo} />

                                                    {/* <img src={`${SERVER_URL}/${user.photo}`} alt="" /> */}
                                                </div>
                                            </div>
                                            <h1>{item?.userName}</h1>

                                        </Link>
                                        </li>
                                    </Paper>

                                    <Paper>
                                        <li className='font-bold text-black'><Link to='/setting'> <FiSettings /> Setting <FiChevronRight /></Link></li>
                                    </Paper>

                                    <Paper>
                                        <li className='font-bold text-black'><Link to='/'> <FiHelpCircle /> Help And Support <FiChevronRight /> </Link></li>
                                    </Paper>

                                    <Paper className='flex justify-center'>
                                        <button onClick={handleLogout}><li className='font-bold text-black'><Link to='/login'> <FiUpload /> Logout</Link></li></button>

                                    </Paper>


                                </Paper>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;