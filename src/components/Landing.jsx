import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Grid, Card, CardContent } from '@mui/material';

const LandingPage = () => {
  return (
    <Container>
      <Typography variant="h2" align="center" gutterBottom>
        Welcome to Video Shortener
      </Typography>
      <Typography variant="h5" align="center" paragraph>
        Our application allows you to easily create and download short clips from YouTube videos. Sign up to start generating your video shorts or sign in to access your existing clips.
      </Typography>
      
      <Grid container spacing={4} justifyContent="center" mb={4}>
        <Grid item xs={12} md={6} lg={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="div" gutterBottom>
                Easy Video Shortening
              </Typography>
              <Typography variant="body2">
                Quickly and effortlessly convert long YouTube videos into shorter clips tailored to your needs. Simply input the video URL and get your clips in minutes.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="div" gutterBottom>
                High-Quality Clips
              </Typography>
              <Typography variant="body2">
                Ensure the quality of your clips with our advanced processing tools. We maintain high standards so your clips are clear and crisp.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="div" gutterBottom>
                Secure and Fast
              </Typography>
              <Typography variant="body2">
                Our application is designed to be secure and fast. Your data and clips are handled with utmost privacy and efficiency.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <Typography variant="h6" gutterBottom>
          Ready to get started?
        </Typography>
        <Button variant="contained" color="primary" component={Link} to="/signup" style={{ marginRight: '1rem' }}>
          Sign Up
        </Button>
        <Button variant="outlined" color="primary" component={Link} to="/signin">
          Sign In
        </Button>
      </div>
    </Container>
  );
};

export default LandingPage;
