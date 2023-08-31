import React, { useState } from 'react';
import { BiLike, BiComment } from "react-icons/bi";
import { FaShare } from 'react-icons/fa';

const CreatePost = () => {
    const [posts, setPosts] = useState([]);

    const handlePost = event => {
        event.preventDefault();
        const form = event.target;
        const post = form.post.value;
        // console.log(post);
        event.target.reset();

        const FacebookPost = { post }
        // console.log(FacebookPost);

        fetch('http://localhost:5000/facebookpost', {
            method: "POST",
            headers: {
                "Content-type": "Application/json"
            },
            body: JSON.stringify(FacebookPost)
        })
            .then(res => res.json())
            .then(data => {
                setPosts(data.allPost)
                console.log(data.allPost);
            });
    }



    return (
        <div className=' '>
            <form onSubmit={handlePost}>
                <div className='flex bg-white  mx-1 mb-5 rounded-lg items-center p-5 px-3 gap-3'>
                    <div className="w-10 rounded-full">
                        <img src="https://i.ibb.co/Ybc5Jqs/home-banner.png" />
                    </div>
                    <input className='w-full h-10 px-4 py-2 rounded-full bg-fuchsia-100 placeholder-color ' type="text" name="post" id="" placeholder='What is Your Mind' required />
                    <input className='bg-[#0339F9] px-4 py-3 rounded-2xl text-white' type="submit" value="POST" />
                </div>
            </form>
            hjg
            {
                posts.map((post, index) => (
                    <div>{post.p}</div>
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
                    <p className='mx-10 mb-10 text-black text-xl  '>   vvvvbndfbs dfd fgsdfvbsdfgv ddd vbsdfgv sdfsdf fsfds fsfdg safgsfdg ssgsdfgsdfg d fgxfgfgs fg sfdgs dfgsdfgsdfgsd fgsdfgsdfgsd fgsdfgsdfgs Test Post</p>
                </div>
                <hr className='mb-5' />
                <div className='flex justify-between mx-24 pb-10'>
                    <p>0</p>

                    <button className='btn flex items-center gap-2 text-2xl'><BiLike /> Like</button>
                    <p className='flex items-center gap-2 text-2xl'><BiComment /> Comment</p>
                    <p className='flex items-center gap-2 text-2xl'><FaShare />Share</p>


                </div>
            </div>
        </div>
    );
};

export default CreatePost;