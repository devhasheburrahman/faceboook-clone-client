import React, { useEffect, useState } from 'react';
import MyPost from './MyPost';
import axios from 'axios';
import { Box, Paper, Typography } from '@mui/material';

const Profile = () => {

    const [user, setUser] = useState({});
    useEffect(() => {

        const user = JSON.parse(localStorage.getItem('user'))
        // console.log(user);

        axios.get(`/api/user/email/${user.email}`)
            .then((response) => {

                setUser(response.data);
            })
            .catch((error) => {

                console.error('Error fetching user data:', error);
            });
    }, []);

    return (
        <div >
            <Paper className='h-full mb-2 mt-5 p-2'>
                <Box className='flex gap-10 items-center'>
                    <Paper className='space-y-3  p-10'>
                        <img className='rounded-full h-[200px] w-[200px]' title={user.userName} src={user.photo} alt="" />

                        <Typography align='center' variant='h5'>{user.userName}</Typography>
                    </Paper>
                    <Box>
                        <Box className="flex-col flex gap-5 p-5" >
                            <Box>
                                <Box> User Name</Box>
                                <Box className='border w-[322px] py-3 rounded-md px-3 '>{user.userName}</Box>

                            </Box>
                            <Box>
                                <Box> User Email</Box>
                                <Box className='border w-[322px] py-3 rounded-md px-3 '>{user.email}</Box>

                            </Box>
                        </Box>

                    </Box>
                </Box>


            </Paper>
            <MyPost />
        </div>
    );
};

export default Profile;