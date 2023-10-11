import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provaider/AuthProvider';
import axios from "axios"




const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");


    const { setUser } = useContext(AuthContext);



    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = { email, pass }
        console.log(user)
        try {
            const data = await axios.post("http://localhost:5000/api/login", { email, pass });
            console.log(data)
            if (data.status === 200) {
                // alert(data.data.msg);
                // updateUser(data.data.user);
                localStorage.setItem('user', JSON.stringify(data.data.user));
                // setUser(data.data.user);
                setSuccess('successfully login')
                navigate("/");
            }


        } catch (error) {
            console.log(error?.response?.data?.msg)
            // alert(error.msg);
            setError(error?.response?.data?.msg || 'something went wrong');
        }
    }


    return (
        <div>
            <div className="w-2/4 mt-10 rounded-lg mx-auto text-center min-h-screen bg-white">
                <div className="hero-content flex-col lg:flex-row">

                    <div className=" w-full mb-5  bg-white">
                        <img className='h-full p-5' src="/facebook-logo.png" alt="" />
                        <form onSubmit={handleSubmit}>
                            <div className="card-body">
                                <h1 className="text-3xl text-white mb-5 font-bold">Please Login</h1>
                                <div className="form-control">

                                    <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} name='email' placeholder="Email" className="input input-bordered bg-white" required />
                                </div>
                                <div className="form-control">
                                    <input value={pass} onChange={(e) => { setPass(e.target.value) }} type="password" name='password' placeholder="Password" className="input input-bordered bg-white" required />

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
            </div>
        </div>
    );
};

export default Login;