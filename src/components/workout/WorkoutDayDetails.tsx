'use client'

import { useState } from 'react'
import { Card, CardContent, Typography, Button, LinearProgress } from '@mui/material'

type Exercise = {
  id: number
  name: string
  description: string
  videoUrl?: string
  sets: number
  reps: number
}

const WorkoutDayDetails = ({ challengeId, dayNumber }: { challengeId: string; dayNumber: string }) => {
  const [exercises, setExercises] = useState<Exercise[]>([
    {
      id: 1,
      name: 'Push Ups',
      description: 'Keep your back straight, lower until elbows are at 90 degrees.',
      sets: 3,
      reps: 12,
      videoUrl: 'https://media.giphy.com/media/l3q2K5jinAlChoCLS/giphy.gif'
    },
    {
      id: 2,
      name: 'Squats',
      description: 'Feet shoulder-width apart, lower until thighs are parallel to the floor.',
      sets: 3,
      reps: 15
    }
  ])

  const [completed, setCompleted] = useState<number[]>([])

  const toggleComplete = (id: number) => {
    setCompleted(prev =>
      prev.includes(id) ? prev.filter(exId => exId !== id) : [...prev, id]
    )
  }

  const progress = (completed.length / exercises.length) * 100

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Day {dayNumber} - Challenge {challengeId}
      </Typography>

      <LinearProgress variant="determinate" value={progress} sx={{ mb: 3 }} />

      {exercises.map(ex => (
        <Card key={ex.id} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6">{ex.name}</Typography>
            {ex.videoUrl && <img src={ex.videoUrl} alt={ex.name} width="100%" style={{ borderRadius: 8, marginTop: 8 }} />}
            <Typography variant="body2" sx={{ mt: 1 }}>{ex.description}</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>Sets: {ex.sets} | Reps: {ex.reps}</Typography>
            <Button
              variant={completed.includes(ex.id) ? 'contained' : 'outlined'}
              color="primary"
              sx={{ mt: 1 }}
              onClick={() => toggleComplete(ex.id)}
            >
              {completed.includes(ex.id) ? 'Completed' : 'Mark Complete'}
            </Button>
          </CardContent>
        </Card>
      ))}

      {completed.length === exercises.length && (
        <Button
          variant="contained"
          color="success"
          sx={{ mt: 3 }}
          onClick={() => alert('Workout Complete!')}
        >
          Finish Day
        </Button>
      )}
    </div>
  )
}

export default WorkoutDayDetails
