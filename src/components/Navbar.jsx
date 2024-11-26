import React from 'react';
import { AppBar, Toolbar, Button, Typography, Link as MuiLink, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material';

const NavBar = ({ isAuthenticated, setIsAuthenticated }) => {

  const handleSignOut = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
  };

  const renderAuthButtons = () => {
    if (isAuthenticated) {
      return (
        <>
          <Button color="inherit" component={Link} to="/profile">
            Profile
          </Button>
          <Button color="inherit" onClick={handleSignOut}>
            Sign Out
          </Button>
        </>
      );
    } else {
      return (
        <>
          <Button color="inherit" component={Link} to="/signup">
            Sign Up
          </Button>
          <Button color="inherit" component={Link} to="/signin">
            Sign In
          </Button>
        </>
      );
    }
  };

  const renderSocialIcons = () => (
    <>
      <IconButton color="inherit" href="https://www.facebook.com" target="_blank" aria-label="Facebook">
        <Facebook />
      </IconButton>
      <IconButton color="inherit" href="https://www.instagram.com" target="_blank" aria-label="Instagram">
        <Instagram />
      </IconButton>
      <IconButton color="inherit" href="https://www.twitter.com" target="_blank" aria-label="Twitter">
        <Twitter />
      </IconButton>
      <IconButton color="inherit" href="https://www.youtube.com" target="_blank" aria-label="YouTube">
        <YouTube />
      </IconButton>
    </>
  );

  return (
    <AppBar position="static" style={{ height: "4rem" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <MuiLink component={Link} to="/" color="inherit" underline="none">
            YouTube Shorts Download
          </MuiLink>
        </Typography>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {renderAuthButtons()}
          {renderSocialIcons()}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
