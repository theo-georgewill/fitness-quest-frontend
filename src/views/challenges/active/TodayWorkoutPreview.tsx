// src/views/challenges/active/TodayWorkoutPreview.tsx
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

const TodayWorkoutPreview = () => {
  const exercises = ['Push Ups - 15 reps', 'Squats - 20 reps', 'Plank - 60 secs']

  return (
    <Card>
      <CardContent>
        <Typography variant='h6'>Day 5 of 30</Typography>
        <Typography variant='body2' color='text.secondary' mb={2}>
          Today’s Workout
        </Typography>
        <List dense>
          {exercises.map((exercise, index) => (
            <ListItem key={index}>{exercise}</ListItem>
          ))}
        </List>
        <Box mt={2}>
          <Button variant='contained' fullWidth>
            Start Workout (+50 XP)
          </Button>
        </Box>
      </CardContent>
    </Card>
  )
}

export default TodayWorkoutPreview
