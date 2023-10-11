import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Button, Paper, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";


export default function Write() {

    const navigate = useNavigate();
    const [error, setError] = useState()
    const [images, setImages] = useState([]);
    const [user, setUser] = useState([])
    // console.log(user);

    const [formValues, setFormValues] = useState({

        content: "",
        userName: "",
        email: "",
        userPhoto: "",

    });

    const [file, setFile] = useState([

    ]);

    useEffect(() => {
        const userData = localStorage.getItem('user');
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser)

        if (parsedUser && parsedUser.userName) {
            setFormValues((prevFormValues) => ({
                ...prevFormValues,
                userName: parsedUser.userName,
                email: parsedUser.email,
                userPhoto: parsedUser.photo,

            }));
        }
    }, []);

    const handleChange = (e) => {
        const newFormValues = { ...formValues };;
        newFormValues[e.target.name] = e.target.value;
        setFormValues(newFormValues)
    }

    const handleFile = async (e) => {

        try {

            const formData = new FormData()
            formData.append('file', e.target.files[0])
            const result = await axios.post('/api/upload', formData)
            console.log(result);
            if (result?.data.filePath) {
                const newImages = [...images, result?.data.filePath]
                setImages(newImages)

                const newFiles = [...file, e.target.files[0]]
                setFile(newFiles);

                // alert('Uploaded')
            }
        } catch (error) {
            console.log(error);
            alert('Failed to upload')
        }
    };



    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formValues.content || images.length < 1) {
            console.log("Title, content, and images are required.");

            return;
        }

        try {
            const data = { ...formValues, images };
            console.log(data);
            const result = await axios.post('/api/posts/create', data)
            navigate('/')
            console.log(result);

        } catch (error) {
            console.log(error);
            setError(error.response.data.message)
        }
    };



    return (
        <div >
            <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'center' }}>
                <Paper className="p-5" >

                    <h2 className="text-center text-xl font-bold">Create post</h2>

                    <TextField onChange={handleChange} name="content" multiline placeholder="What is on your mind ?" rows={7} id="fileInput" style={{ marginTop: '20px', marginBottom: '20px' }} fullWidth variant="outlined" required />
                    <div className="grid grid-cols-3 gap-4 py-5">
                        {file.map((item, index) => (<div key={index} className="h-[100px] col-span-1  rounded-lg ">
                            <img src={URL.createObjectURL(item)} alt="" />
                        </div>))}
                    </div>
                    <TextField id="fileInput" type="file" onChange={handleFile} fullWidth variant="outlined" required />


                    <Box >
                        <Button fullWidth variant="contained" style={{ marginTop: '20px' }} type="submit">
                            Post
                        </Button>
                        <Box className='text-red-600 text-center'> {error}</Box>
                    </Box>
                </Paper>
            </form>
        </div>
    );
}
