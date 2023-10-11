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


    // const handlePost = event => {
    //     event.preventDefault();
    //     const form = event.target;
    //     const post = form.post.value;
    //     // console.log(post);
    //     event.target.reset();
    //     const FacebookPost = { post }
    //     // console.log(FacebookPost);

    //     //     fetch('http://localhost:5000/facebookpost', {
    //     //         method: "POST",
    //     //         headers: {
    //     //             "Content-type": "Application/json"
    //     //         },
    //     //         body: JSON.stringify(FacebookPost)
    //     //     })
    //     //         .then(res => res.json())
    //     //         .then(data => {
    //     //             setPosts(data.allPost)
    //     //             console.log(data.allPost);
    //     //         });
    //     // }
    //     // const handleComment = event => {
    //     //     event.preventDefault();
    //     //     const form = event.target;
    //     //     const comment = form.comment.value;
    //     //     event.target.reset();
    //     //     // console.log(comment);
    //     //     const Comment = { comment }

    //     //     fetch('http://localhost:5000/facebokcomments', {
    //     //         method: "POST",
    //     //         headers: {
    //     //             "Content-type": "Application/json"
    //     //         },
    //     //         body: JSON.stringify(Comment)
    //     //     })
    //     //         .then(res => res.json())
    //     //         .then(facebookComment => {
    //     //             setComments(facebookComment.allComment)
    //     //             console.log(facebookComment.allComment);
    //     //         });

    //     // }
    // }
    const likeUp = () => {
        setLike(like + 1);

    }


    return (
        <div className=' '>

            <div className='flex bg-white  mx-1  mb-5 rounded-lg items-center p-5 px-3 gap-3'>
                <div className='avatar'>
                    <div className="w-10 rounded-full">
                        <img src={user?.photo} />
                    </div>
                </div>

                <input onClick={() => document.getElementById('my_modal_3').showModal()} className='w-full h-10 px-4 py-2 rounded-full bg-slate-100' type="text" name="post" id="" placeholder='What is Your Mind ?' required />


                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box bg-white">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>

                        <Create />
                    </div>
                </dialog>
                <input className='bg-[#0339F9] px-4 py-3 rounded-2xl text-white' type="submit" value="POST" />
            </div>

            {
                posts.map((post, index) => (
                    <div className='bg-white  shadow-xl mb-5 rounded-xl mx-1 whitespace-normal overflow-hidden'>
                        <div className='flex p-2 shadow-xl mx-2  items-center gap-3'>
                            <div className="w-10 rounded-full">
                                <img src="https://i.ibb.co/Ybc5Jqs/home-banner.png" />
                            </div>
                            <div>
                                <h1 className='font-semibold text-black'>Hashebur Rahman</h1>
                                <p>11:09 AM  01/09/2023 </p>
                            </div>
                        </div>
                        <div>
                            <p className='mx-10 my-5 text-black text-xl  '> {post.post}</p>
                        </div>
                        <hr className='mb-5' />
                        <div className='flex items-center justify-between mx-12 pb-10'>


                            <div className='flex items-center gap-3 '> <button onClick={likeUp} className='   hover:text-[#0339F9]  flex items-center gap-2 text-2xl'>< FaHeart /> </button> <p className='text-2xl'>{like}</p></div>
                            {/*  */}
                            {/* The button to open modal */}
                            <label htmlFor="my_modal_6"><p className='flex items-center gap-2 text-2xl'><BiComment /> Comment</p></label>

                            {/* Put this part before </body> tag */}
                            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                            <div className="modal">
                                <div className="modal-box bg-white">
                                    <h3 className="font-bold text-lg">Write Comment</h3>

                                    <form onSubmit={handleComment}>
                                        <input className='w-full h-10 px-4 py-2 rounded-full bg-fuchsia-100 placeholder-color ' type="text" name="comment" id="" placeholder='What is Your Mind' required />
                                        <input className='bg-[#0339F9] px-4 mt-5 py-3 rounded-2xl text-white' type="submit" value="Comment" />
                                    </form>

                                    <div className="modal-action">
                                        <label htmlFor="my_modal_6" className="btn btn-primary">Close!</label>
                                    </div>
                                </div>
                            </div>
                            <p className='flex items-center gap-2 text-2xl'><FaShare />Share</p>
                        </div>

                        {
                            comments.map((comment, index) => (
                                <div className='flex p-2 ml-20  shadow-2xl mx-2  items-center gap-3'>
                                    <div className="w-10 rounded-full">
                                        <img src="https://i.ibb.co/Ybc5Jqs/home-banner.png" />
                                    </div>
                                    <div>
                                        <h1 className='font-semibold text-black'>Hashebur Rahman</h1>
                                        <p>{comment.comment}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>


                ))
            }

            {/* post section */}
            <div className='bg-white shadow-xl rounded-xl mx-1 whitespace-normal overflow-hidden'>
                <div className='flex p-2 shadow-2xl mx-2  items-center gap-3'>
                    <div className="w-10 rounded-full">
                        <img src="https://i.ibb.co/Ybc5Jqs/home-banner.png" />
                    </div>
                    <h1 className='font-semibold text-black'>Hashebur Rahman</h1>
                </div>
                <div>
                    <p className='mx-10 mb-10 text-black text-xl  '> আলহামদুলিল্লাহ 🥀 সেপ্টেম্বর মাসের প্রথম দিন শুক্রবার।🥀❤️ আসলেই সেপ্টেম্বর মাসটা আমার জীবনের সবচেয়ে দামী একটা মাস❤️🥀। আলহামদুলিল্লাহ এইবার ও এই মাসে ভালো একটা সুখবর পাইছি।🥰🥰 শুকরিয়া প্রভু তোমার কাছে🥀।  এত ভালো সুখবর পাওয়া জন্য।🥰🥰🥀</p>
                </div>
                <hr className='mb-5' />
                <div className='flex justify-between mx-24 pb-10'>

                    <div className='flex items-center gap-3 '> <button onClick={likeUp} className='   hover:text-[#0339F9]  flex items-center gap-2 text-2xl'>< FaHeart className='' /> </button> <p className='text-2xl'> {like}</p></div>
                    <p className='flex items-center gap-2 text-2xl'><BiComment /> Comment</p>
                    <p className='flex items-center gap-2 text-2xl'><FaShare />Share</p>
                </div>
                <div>
                    <div className='flex p-2 ml-20 shadow-2xl mx-2  items-center gap-3'>
                        <div className="w-10 rounded-full">
                            <img src="https://i.ibb.co/Ybc5Jqs/home-banner.png" />
                        </div>
                        <div>
                            <h1 className='font-semibold text-black'>Hashebur Rahman</h1>
                            <p>Alhamdullah</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatePost;