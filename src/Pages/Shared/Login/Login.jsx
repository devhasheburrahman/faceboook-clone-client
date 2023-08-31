import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provaider/AuthProvider';
import { FaGoogle } from 'react-icons/fa';




const Login = () => {
    const [error, setError] = useState();
    const [success, setSuccess] = useState();



    const { signIn, setUser, handleGoogleSignIn } = useContext(AuthContext)

    const navigate = useNavigate();

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        if ((email, password)) {
            signIn(email, password)
                .then(result => {
                    const loggedUser = result.user;
                    event.target.reset();
                    setUser(loggedUser);
                    console.log(loggedUser);
                    navigate('/');
                    setSuccess('successfully LogIn !!')
                })
                .catch((error) => setError(error.message));
        }

    }

    const handleGoogle = () => {
        handleGoogleSignIn()
            .then((result) => {
                console.log(result);
                const loggedUser = result.user;
                // setUser(loggedUser)
                setSuccess('Successfully Login !!')
                navigate('/')
            })
            .catch((error) => setError(error.message)
            )

    }

    return (
        <div><div className="w-[700px] mt-10 rounded-lg mx-auto text-center min-h-screen bg-white">
            <div className="hero-content flex-col lg:flex-row">

                <div className=" w-full mb-5  bg-white">
                    <img className='h-full p-5' src="/facebook-logo.png" alt="" />
                    <form onSubmit={handleLogin}>
                        <div className="card-body">
                            <h1 className="text-xl text-black font-bold">Log in to Facebook</h1>
                            <div className="form-control">

                                <input type="email" name='email' placeholder="Email" className="input input-bordered bg-white" />
                            </div>
                            <div className="form-control">

                                <input type="password" name='password' placeholder="password" className="input input-bordered bg-white" />

                            </div>
                            <div className="form-control mt-6">
                                <input className=" py-3 rounded-md text-white font-semibold bg-[#0339F9]" type="submit" value="Login" />
                            </div>
                            <p className='text-red-500'>{error}</p>
                            <p className='text-primary'>{success}</p>


                        </div>
                    </form>
                    <hr className='border mb-5 ' />
                    <p><Link className='py-3  bg-[#07A717] rounded-lg px-5 text-white font-bold' to='/register'> Create new account</Link></p>
                </div>
            </div>
            <button onClick={handleGoogle} className='btn btn-outline'><span><FaGoogle /></span>   Continue With Google</button>
        </div>
        </div>
    );
};

export default Login;