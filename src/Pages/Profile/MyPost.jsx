import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { SERVER_URL } from '../../Config/constant';
import { FaHeart, FaShare } from 'react-icons/fa';
import { BiComment } from 'react-icons/bi';
import { Paper } from '@mui/material';



const MyPost = () => {
    const [myPosts, setMyPosts] = useState([]);
    const [showFullContent, setShowFullContent] = useState(false);

    useEffect(() => {
        // Retrieve the user object from localStorage
        const user = JSON.parse(localStorage.getItem('user'));

        // Ensure user object and username exist
        if (user && user.userName) {
            const getPosts = async () => {
                try {
                    // Fetch all posts
                    const response = await axios.get('/api/posts');

                    // Filter posts to show only the ones authored by the logged-in user
                    const filteredPosts = response.data.filter(post => post.userName === user.userName);

                    setMyPosts(filteredPosts);
                } catch (error) {
                    console.error('Error fetching posts:', error);
                    // Handle errors appropriately
                }
            };

            getPosts();
        }
    }, []);

    // console.log(myPosts);

    // delete option 
    const handleDelete = async (_id) => {
        try {
            // Send a DELETE request to your server to delete the post with the given _id
            await axios.delete(`/api/posts/${_id}`);

            // Remove the deleted post from the state
            setMyPosts((prevPosts) => prevPosts.filter((post) => post._id !== _id));
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };
    // see more button
    const toggleContent = () => {
        setShowFullContent(!showFullContent);
    };


    return (
        <div className='grid gap-5' >
            {
                myPosts.map((post, index) => (
                    (
                        <Paper key={post._id} className="card card-compact w-full bg-white p-3  shadow-xl">
                            <div className='flex justify-between px-5'>
                                <div>
                                    <h2 className="card-title">{post.userName}</h2>
                                    <h1>{new Date(post?.createdAt).toDateString()}</h1>
                                </div>

                                <div>
                                    <button onClick={() => handleDelete(post._id)}> X</button>
                                </div>
                            </div>
                            <div className="card-body">

                                {post.content.length > 100 && (
                                    <div>
                                        <p>{showFullContent ? post.content : post.content.slice(0, 100)}</p>
                                        <button className='text-red-500' onClick={toggleContent}>
                                            {showFullContent ? "See Less" : "See More"}
                                        </button>

                                    </div>
                                )}
                            </div>
                            <div>
                                <div className="w-full carousel rounded-box">
                                    {
                                        post.images.map((image, index) => (
                                            <div className="carousel-item w-full">
                                                <img className='w-full h-[200px]' src={`${SERVER_URL}/${image}`} alt="User Post Images" />
                                            </div>
                                        ))
                                    }

                                </div>
                            </div>

                            <div className='flex justify-between mx-10 pb-10'>

                                <div className='flex items-center gap-3 '> <button className='   hover:text-[#0339F9]  flex items-center gap-2 text-2xl'>< FaHeart className='' /> </button> <p className='text-2xl'>{252}  </p></div>
                                <p className='flex items-center gap-2 text-2xl'><BiComment /> Comment</p>
                                <p className='flex items-center gap-2 text-2xl'><FaShare />Share</p>
                            </div>
                        </Paper>
                    )
                ))
            }
        </div>
    );
};

export default MyPost;