'use client'

import { useRouter } from 'next/navigation'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import LinearProgress from '@mui/material/LinearProgress'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Stack from '@mui/material/Stack'
import Link from 'next/link'

// Dummy data
const challenge = {
  id: 1,
  name: '30-Day Fitness Quest',
  currentDay: 5,
  totalDays: 30,
  todayWorkout: {
    title: 'Upper Body Blast',
    duration: '15 mins',
    exercises: 5
  },
  challengers: [
    { id: 1, name: 'John Doe', avatar: '/images/avatars/1.png' },
    { id: 2, name: 'Jane Smith', avatar: '/images/avatars/2.png' },
    { id: 3, name: 'Sam Wilson', avatar: '/images/avatars/3.png' },
    { id: 4, name: 'Emily Brown', avatar: '/images/avatars/4.png' }
  ]
}

export default function ActiveChallengeDashboard() {
  const router = useRouter()

  const progress = (challenge.currentDay / challenge.totalDays) * 100

  const handleStartWorkout = () => {
    router.push(`/workout/today?challengeId=${challenge.id}`)
  }

  return (
    <Card>
      <CardContent>
        {/* Challenge Title */}
        <Typography variant='h5' fontWeight='bold'>
          {challenge.name}
        </Typography>
        <Typography variant='body2' color='text.secondary' sx={{ mb: 2 }}>
          Day {challenge.currentDay} of {challenge.totalDays}
        </Typography>

        {/* Progress Bar */}
        <LinearProgress
          variant='determinate'
          value={progress}
          sx={{ height: 8, borderRadius: 4, mb: 3 }}
        />

        {/* Today's Workout */}
        <Typography variant='subtitle1' fontWeight='bold'>
          Today&apos;s Workout
        </Typography>
        <Typography variant='body1'>{challenge.todayWorkout.title}</Typography>
        <Typography variant='body2' color='text.secondary'>
          {challenge.todayWorkout.duration} • {challenge.todayWorkout.exercises} exercises
        </Typography>

        {/* Challengers */}
        <Stack direction='row' spacing={2} alignItems='center' sx={{ mt: 2 }}>
          <AvatarGroup max={4}>
            {challenge.challengers.map(user => (
              <Avatar key={user.id} src={user.avatar} alt={user.name} />
            ))}
          </AvatarGroup>
          <Typography variant='body2'>
            {challenge.challengers.length}+ challengers
          </Typography>
        </Stack>
      </CardContent>

      {/* Actions */}
      <CardActions sx={{ justifyContent: 'space-between' }}>
        <Button variant='contained' onClick={handleStartWorkout}>
          Start Workout
        </Button>
        <Stack direction='row' spacing={2}>
          <Link href={`/challenge/${challenge.id}`} passHref>
            <Button size='small'>View Details</Button>
          </Link>
          <Link href={`/progress/${challenge.id}`} passHref>
            <Button size='small'>My Progress</Button>
          </Link>
        </Stack>
      </CardActions>
    </Card>
  )
}
