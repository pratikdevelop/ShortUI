import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Signup from './components/Signup';
// import Signin from './components/Signin';
// import ForgotPassword from './components/ForgetPassword';
// import Profile from './components/Profile';
import Home from './components/Home';
// import LandingPage from './components/Landing';
import NavBar from './components/Navbar';
// import TextToVideo from './components/TextToVideo';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('authToken'));

  return (
    <Router>
      <div className="flex flex-col relative w-full  h-[100vh] p-4">
        <NavBar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>
        {/* <TextToVideo/> */}
        <Routes>
          <Route path=""  Component={Home} />
          {/* <Route path="/signup" Component={Signup} />
          <Route path="/signin" Component={Signin} />
          <Route path="/forgot-password" element={ForgotPassword} />
          <Route path="/profile" render={() => (
            isAuthenticated ? <Profile /> : <Navigate to="/signin" />
          )} />
          <Route path="/home" render={() => (
            isAuthenticated ? <Home /> : <Navigate to="/signin" />
          )} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;

