import React, { useState } from 'react';
import { BiLike, BiComment } from "react-icons/bi";
import { FaShare,FaHeart } from 'react-icons/fa';

const CreatePost = () => {
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);
    const [like,setLike] = useState(0);
    
   

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
const handleComment= event=>{
    event.preventDefault();
        const form = event.target;
        const comment = form.comment.value;
        event.target.reset();
        // console.log(comment);
        const Comment = {comment}

        fetch('http://localhost:5000/facebokcomments', {
            method: "POST",
            headers: {
                "Content-type": "Application/json"
            },
            body: JSON.stringify(Comment)
        })
            .then(res => res.json())
            .then(facebookComment => {
                setComments(facebookComment.allComment)
                console.log(facebookComment.allComment);
            });

}

const likeUp = ()=>{
setLike(like+1);
     
}


    return (
        <div className=' '>
            <form onSubmit={handlePost}>
                <div className='flex bg-white  mx-1  mb-5 rounded-lg items-center p-5 px-3 gap-3'>
                    <div className="w-10 rounded-full">
                        <img src="https://i.ibb.co/Ybc5Jqs/home-banner.png" />
                    </div>
                    <input className='w-full h-10 px-4 py-2 rounded-full bg-fuchsia-100 placeholder-color ' type="text" name="post" id="" placeholder='What is Your Mind' required />
                    <input className='bg-[#0339F9] px-4 py-3 rounded-2xl text-white' type="submit" value="POST" />
                </div>
            </form>

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
                           

                           <div className='flex items-center gap-3 '> <button onClick={likeUp}  className='   hover:text-[#0339F9]  flex items-center gap-2 text-2xl'>< FaHeart/> </button> <p className='text-2xl'>{like}</p></div>
                           {/*  */}
                            {/* The button to open modal */}
                        <label htmlFor="my_modal_6"><p className='flex items-center gap-2 text-2xl'><BiComment /> Comment</p></label>

                             {/* Put this part before </body> tag */}
                                <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                               <div className="modal">
                          <div className="modal-box">
                            <h3 className="font-bold text-lg">Write Comment</h3>

                            <form onSubmit={handleComment}>
                            <input className='w-full h-10 px-4 py-2 rounded-full bg-fuchsia-100 placeholder-color ' type="text" name="comment" id="" placeholder='What is Your Mind' required />
                           <input className='bg-[#0339F9] px-4 mt-5 py-3 rounded-2xl text-white' type="submit" value="Comment" />
                            </form>
                  
                        <div className="modal-action">
                         <label htmlFor="my_modal_6" className="btn">Close!</label>
                             </div>   
                        </div>
                     </div>                    
                    <p className='flex items-center gap-2 text-2xl'><FaShare />Share</p>
               </div>

              {
                comments.map((comment,index)=>(
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
            {/* <div className='bg-white shadow-xl rounded-xl mx-1 whitespace-normal overflow-hidden'>
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

                    <div className='flex items-center gap-3 '> <button onClick={likeUp}  className='   hover:text-[#0339F9]  flex items-center gap-2 text-2xl'>< FaHeart  className=''/> </button> <p className='text-2xl'> {like}</p></div>
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
                    <p>HAs gjsadfhsald ff hashge dfas dfasdfasf asdflkas dfasd fad fuaedfaw ef a</p>
                    </div>                                    
                </div>
                </div>
            </div> */}
        </div>
    );
};

export default CreatePost;