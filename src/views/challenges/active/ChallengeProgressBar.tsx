// src/views/challenges/active/ChallengeProgressBar.tsx
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import LinearProgress from '@mui/material/LinearProgress'
import Box from '@mui/material/Box'

const ChallengeProgressBar = () => {
  const progress = 50

  return (
    <Card>
      <CardContent>
        <Typography variant='body1' mb={1}>
          Progress: {progress}%
        </Typography>
        <Box sx={{ width: '100%' }}>
          <LinearProgress variant='determinate' value={progress} />
        </Box>
      </CardContent>
    </Card>
  )
}

export default ChallengeProgressBar
