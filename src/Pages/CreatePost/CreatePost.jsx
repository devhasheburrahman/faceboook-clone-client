import React, { useContext, useEffect, useState } from 'react';
import { BiLike, BiComment } from "react-icons/bi";
import { FaShare, FaHeart } from 'react-icons/fa';
import { AuthContext } from '../../Provaider/AuthProvider';
import Create from '../../Components/Create';

const CreatePost = () => {
    const [user, setUser] = useState([])
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);
    const [like, setLike] = useState(0);


    useEffect(() => {
        const person = JSON.parse(localStorage.getItem("user"))
        setUser(person)
    }, [])

    const likeUp = () => {
        setLike(like + 1);

    }


    return (
        <div className='flex bg-white  mx-1  mb-5 rounded-lg items-center p-5 px-3 gap-3'>
            <div className='avatar'>
                <div className="w-10 rounded-full">
                    <img src={user?.photo} />
                </div>
            </div>

            <input onClick={() => document.getElementById('my_modal_3').showModal()} className='w-full h-10 px-4 py-2 rounded-full bg-slate-100' type="text" name="post" id="" placeholder='What is Your Mind ?' required />


            <dialog id="my_modal_3" className="modal">
                <div className="modal-box w-11/12 max-w-3xl bg-white">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    <Create />
                </div>
            </dialog>
        </div>

    );
};

export default CreatePost;