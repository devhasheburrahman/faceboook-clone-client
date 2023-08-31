import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provaider/AuthProvider';


const Register = () => {
    const { createUser, setUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleRegister = event => {
        event.preventDefault();
        setError('')
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name, email, password, photo);

        createUser(email, password)
            .then(result => {
                const createUser = result.user;
                setUser(createUser);
                event.target.reset();
                setSuccess('Successfully Create Account')

            })
            .catch(error => {
                setError(error.message);
            })

    }



    return (
        <div className=" w-[700px] rounded-lg mt-10 mx-auto text-center min-h-screen bg-white">
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
                            <p className='text-red-500'> {error}</p>
                            <p className='text-success'> {success}</p>
                            <div className="form-control mt-6">
                                <input className="bg-[#07A717] rounded-lg text-white font-semibold py-[10px]" type="submit" value="Sign Up" />
                            </div>
                        </div>
                    </form>
                    <p className='my-4 text-center'>Already have an account? Please<Link className='text-[#0339F9] font-bold' to='/login'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;