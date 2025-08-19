'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import MobileStepper from '@mui/material/MobileStepper'
import Paper from '@mui/material/Paper'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'

const dummyExercises = [
  {
    id: 1,
    name: 'Jumping Jacks',
    instructions: 'Do 30 jumping jacks.',
    media: '/images/exercises/jumping-jacks.gif',
  },
  {
    id: 2,
    name: 'Push Ups',
    instructions: 'Perform 15 push ups with proper form.',
    media: '/images/exercises/push-ups.gif',
  },
  {
    id: 3,
    name: 'Plank',
    instructions: 'Hold a plank position for 1 minute.',
    media: '/images/exercises/plank.gif',
  },
]

export default function TodayWorkout() {
  const router = useRouter()
  const [activeStep, setActiveStep] = useState(0)
  const [completeDialogOpen, setCompleteDialogOpen] = useState(false)

  const maxSteps = dummyExercises.length
  const exercise = dummyExercises[activeStep]

  const handleNext = () => {
    if (activeStep === maxSteps - 1) {
      setCompleteDialogOpen(true)
    } else {
      setActiveStep(prev => prev + 1)
    }
  }

  const handleBack = () => {
    setActiveStep(prev => (prev > 0 ? prev - 1 : 0))
  }

  const handleComplete = () => {
    // TODO: Save progress, update XP, backend call, etc.
    setCompleteDialogOpen(false)
    router.push('/challenges/active') // or wherever
  }

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4, px: 2 }}>
      <Paper elevation={3} sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom>
          {exercise.name}
        </Typography>
        <Box
          component="img"
          src={exercise.media}
          alt={exercise.name}
          sx={{ width: '100%', borderRadius: 1, mb: 2 }}
        />
        <Typography variant="body1" mb={2}>
          {exercise.instructions}
        </Typography>

        <MobileStepper
          variant="dots"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button size="small" onClick={handleNext}>
              {activeStep === maxSteps - 1 ? 'Finish' : 'Next'}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              Back
            </Button>
          }
        />
      </Paper>

      <Dialog open={completeDialogOpen} onClose={() => setCompleteDialogOpen(false)}>
        <DialogTitle>Challenge Complete!</DialogTitle>
        <DialogContent>
          <Typography>🎉 You beat today’s workout! Keep up the great work.</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleComplete} variant="contained">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}
