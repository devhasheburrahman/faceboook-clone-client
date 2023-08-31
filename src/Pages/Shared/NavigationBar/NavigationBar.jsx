import React from 'react';
import { Link } from 'react-router-dom';
import { FiBell, FiChevronRight, FiGift, FiHelpCircle, FiHome, FiSettings, FiUpload, FiUsers, FiYoutube } from "react-icons/fi";
import { FaFacebookMessenger } from "react-icons/fa";


const NavigationBar = () => {
    return (
        <div>
            <div className="navbar bg-white shadow-lg px-5">
                <div className="flex-1">
                    <img className='h-10' src="/logo.png" alt="" />
                    <div className="form-control">
                        <div className="input-group">
                            <input type="text" placeholder="Search…" className="input outline-none  bg-slate-200 ml-2 " />
                            <button className=" bg-slate-200  btn-square">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </div>
                    <div className='flex  ml-10  items-center gap-24'>
                        <p title='Home' ><Link> <FiHome className='text-[30px] text-slate-500 hover:bg-slate-400' /></Link></p>

                        <p title='Friend' ><Link to='/addFriend'> <FiUsers className='text-[30px] text-slate-500 hover:bg-slate-400' /></Link></p>
                        <p title='Video' ><Link to='/video'> <FiYoutube className='text-[30px] text-slate-500 hover:bg-slate-400' /></Link></p>
                        <p title='Group' ><Link to='/group'> <img className='h-[33px] rounded-full' src="/group.png" alt="" />  </Link></p>
                        <p title='Marketplaces' ><Link to='/market-please'> <FiGift className='text-[30px] text-slate-500 hover:bg-slate-400' /></Link></p>
                    </div>
                </div>
                <div>
                    <FaFacebookMessenger title='Messenger' className='text-[30px]  text-black  hover:bg-slate-400' />
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
                                <div className="w-10 rounded-full">
                                    <img src="https://i.ibb.co/Ybc5Jqs/home-banner.png" />
                                </div>
                            </label>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                            <ul className="menu p-4 w-80 min-h-full bg-white text-base-content">
                                {/* Sidebar content here */}
                                <li className='shadow-sm font-bold text-black'><Link to='/profile'>
                                    <div className="w-10 rounded-full">
                                        <img src="https://i.ibb.co/Ybc5Jqs/home-banner.png" />
                                    </div>
                                    <h1>Md Hashebur Rahman</h1>

                                </Link></li>

                                <li className='font-bold text-black'><Link to='/setting'> <FiSettings /> Setting <FiChevronRight /></Link></li>
                                <li className='font-bold text-black'><Link to='/support'> <FiHelpCircle /> Help And Support <FiChevronRight /> </Link></li>
                                <li className='font-bold text-black'><Link to='/login'> <FiUpload /> Logout</Link></li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;