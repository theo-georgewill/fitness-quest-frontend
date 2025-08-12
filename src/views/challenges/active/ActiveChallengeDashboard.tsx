// src/views/challenges/active/ActiveChallengeDashboard.tsx
import Grid from '@mui/material/Grid'
import ChallengeHeader from './ChallengeHeader'
import TodayWorkoutPreview from './TodayWorkoutPreview'
import ChallengeProgressBar from './ChallengeProgressBar'

const ActiveChallengeDashboard = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <ChallengeHeader />
      </Grid>
      <Grid item xs={12} md={6}>
        <TodayWorkoutPreview />
      </Grid>
      <Grid item xs={12} md={6}>
        <ChallengeProgressBar />
      </Grid>
    </Grid>
  )
}

export default ActiveChallengeDashboard
