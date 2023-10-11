import React from 'react';
import CreatePost from '../CreatePost/CreatePost';
import Post from '../CreatePost/Post/Post';

const MainHome = () => {
    return (
        <div className='pt-10 w-[750px]'>

            <CreatePost />
            <Post />
        </div>
    );
};

export default MainHome;