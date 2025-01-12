'use client';
import { useState } from "react";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import axios from "axios";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useRouter } from 'next/navigation'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [open, setOpen] = useState(false);
    const router = useRouter()



    const handleSubmit = () => {
        console.log( email, password,);
        axios.post('http://localhost:5000/login', {
            email,
            password,
        }).then((res) => {
            console.log(res.data);
            localStorage.setItem('token', res.data.token)
            setOpen(true);
            setTimeout(() => {
                setOpen(false)
                router.push('/')
            }, 5000);
        }).catch((error) => {
            console.log(error);
        })

    }

    return (
        <div className="max-w-md mx-auto p-8 mt-12 space-y-12 bg-white rounded-md shadow-lg">
            <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">
                Login with your account
            </h2>
            <form className="flex flex-col space-y-8">
                <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    placeholder="Enter email"
                />
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    label="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}

                    name="password"
                    placeholder="Enter password"
                />


                <Button
                    variant="contained"
                    color="primary"
                    type="button"
                    onClick={handleSubmit}
                // className="w-full bg-yellow-500 text-white py-3 rounded-md hover:bg-yellow-700 transition duration-300"
                >
                    Login
                </Button>
            </form>
            <p className="text-center text-gray-600 mt-4">
                Not have an account?{" "}
                <a href="signup" className="text-blue-600 hover:underline">
                    Sign up
                </a>
            </p>
            <Snackbar open={open} autoHideDuration={6000}>
                <Alert
                    severity="success"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    User Logged in successfully
                </Alert>
            </Snackbar>
        </div>
    );
};

export default Login;
