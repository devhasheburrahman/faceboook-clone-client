import React from 'react';
import { Link } from 'react-router-dom';

const handleRegister = event => {
    event.preventDefault();
}

const Register = () => {
    return (
        <div className=" w-full rounded-lg mt-10 mx-auto text-center min-h-screen bg-white">
            <div className="hero-content flex-col lg:flex-row">

                <div className=" flex-shrink-0 w-full  shadow-2xl bg-white">
                    <form onSubmit={handleRegister}>
                        <div className="card-body">
                            <h1 className="text-3xl text-black font-bold">Create New Account!!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Your Name" required className="input input-bordered bg-white" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Email" required className="input input-bordered bg-white" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" required className="input input-bordered bg-white" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photo' placeholder=" Photo Url" required className="input input-bordered bg-white" />
                            </div>
                            {/* <p className='text-red-500'> {error}</p>
                            <p className='text-success'> {success}</p> */}
                            <div className="form-control mt-6">
                                <input className="bg-[#07A717] rounded-lg text-white font-semibold py-[10px]" type="submit" value="Sign Up" />
                            </div>
                        </div>
                    </form>
                    <p className='my-4 text-center'>Already have an account? Please<Link className='text-primary font-bold' to='/login'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;