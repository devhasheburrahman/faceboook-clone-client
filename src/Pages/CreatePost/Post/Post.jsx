
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { SERVER_URL } from '../../../Config/constant';
// import { Avatar, Card, CardContent, CardHeader, CardMedia, IconButton } from '@mui/material';
// import { ExpandMore } from '@mui/icons-material';
// import CardActions from '@mui/material/CardActions';
// import Typography from '@mui/material/Typography';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import { FaHeart, FaShare } from 'react-icons/fa';
// import { BiComment } from 'react-icons/bi';
// ;


// // import { SERVER_URL } from '../../config/constant';

// const Post = ({ post }) => {

//     const [posts, setPosts] = useState([])
//     useEffect(() => {
//         const getPosts = async () => {
//             try {
//                 const result = await axios('/api/posts')
//                 setPosts(result.data)
//                 // console.log(result.data);
//             } catch (error) {

//             }
//         }
//         getPosts()
//     }, [])

//     console.log(posts);



//     return (
//         <div>

//             <div>
//                 {
//                     posts.map((post, index) => (
//                         <Card className='px-5'>
//                             <CardHeader
//                                 avatar={
//                                     <Avatar aria-label="recipe">
//                                         <img src={post?.userPhoto} alt="" />
//                                     </Avatar>
//                                 }
//                                 action={
//                                     <IconButton aria-label="settings">
//                                         <MoreVertIcon />
//                                     </IconButton>
//                                 }
//                                 title={post.userName}
//                                 subheader={new Date(post?.createdAt).toDateString()}
//                             />
//                             <CardMedia
//                                 component="img"
//                                 height="194"
//                                 image={`${SERVER_URL}/${post.images[0]}`}
//                                 alt="User Post Images"
//                             />

//                             {post.images.map((image, index) => (
//                                 <div key={index} className="carousel-item w-full">
//                                     <img className="w-full h-[300px]" src={`${SERVER_URL}/${image}`} alt="User Post Images" />
//                                 </div>
//                             ))}
//                             <CardContent>

//                                 {post.content}

//                             </CardContent>
//                             <div className='flex justify-between mx-24 pb-10'>

//                                 <div className='flex items-center gap-3 '> <button className='   hover:text-[#0339F9]  flex items-center gap-2 text-2xl'>< FaHeart className='' /> </button> <p className='text-2xl'>{252}  </p></div>
//                                 <p className='flex items-center gap-2 text-2xl'><BiComment /> Comment</p>
//                                 <p className='flex items-center gap-2 text-2xl'><FaShare />Share</p>
//                             </div>
//                         </Card>

//                     ))
//                 }


//             </div>


//             <div>
//                 {
//                     posts.map((post, index) => (

//                         (
//                             <div>
//                                 {
//                                     post.images.map((image, index)(
//                                         <img className="w-full h-[300px]" src={`${SERVER_URL}/${image}`} alt="User Post Images" />
//                                     ))
//                                 }

//                             </div>
//                         )
//                     ))
//                 }
//             </div>
//         </div>


//     );
// };

// export default Post;
