import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function CardHero() {
  return (
    <Card sx={{ width: '100%', margin: 'auto', boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="400"
        image="/hero-image.jpg" // replace with your hero image
        alt="Hero"
      />
      <CardContent sx={{ textAlign: 'left' }}>
        <Typography gutterBottom variant="h4" component="div">
          Welcome to Fitness Quest
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          Your journey to a healthier lifestyle starts here.
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Get Started
        </Button>
      </CardContent>
    </Card>
  );
}
