'use client';
import { useState } from "react";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import axios from "axios";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useRouter } from 'next/navigation'

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [open, setOpen] = useState(false);
  const router = useRouter()



  const handleSubmit = () => {
    console.log(name, email, password, confirmPassword, phone);
    axios.post('http://localhost:5000/signup', {
      name,
      email,
      password,
      confirmPassword,
      phone
    }).then((res) => {
      console.log(res.data);
      setOpen(true);
      setTimeout(() => {
        setOpen(false)
        router.push('/login')
      }, 5000);
    }).catch((error) => {
      console.log(error);
    })
    
  }

  return (
    <div className="max-w-md mx-auto p-8 mt-12 bg-white rounded-md shadow-lg">
      <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">
        Sign Up
      </h2>
      <form className="flex flex-col space-y-6">
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
          label="Enter name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
          placeholder="Enter name"
        />
        <TextField
          id="outlined-basic"
          variant="outlined"
          label="Enter phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          name="phone"
          placeholder="Enter phone"
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
        <TextField
          id="outlined-basic"
          variant="outlined"
          label="Enter confirm password"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
          name="confirm_password"
          placeholder="Enter confirm password"
        />

        <Button
          variant="contained"
          color="primary"
          type="button"
          onClick={handleSubmit}
          // className="w-full bg-yellow-500 text-white py-3 rounded-md hover:bg-yellow-700 transition duration-300"
        >
          Sign Up
        </Button>
      </form>
      <p className="text-center text-gray-600 mt-4">
        Already have an account?{" "}
        <a href="login" className="text-blue-600 hover:underline">
          Log In
        </a>
      </p>
      <Snackbar open={open} autoHideDuration={6000} >
        <Alert
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          User Created Successfully
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Signup;
