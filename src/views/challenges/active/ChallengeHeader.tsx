// src/views/challenges/active/ChallengeHeader.tsx
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Box from '@mui/material/Box'

const ChallengeHeader = () => {
  return (
    <Card>
      <CardMedia
        component='img'
        height='180'
        image='/images/fitness/banner.jpg'
        alt='Challenge Banner'
      />
      <CardContent>
        <Typography variant='h5' fontWeight={600}>
          Summer Shred Challenge
        </Typography>
        <Box mt={2}>
          <AvatarGroup total={18}>
            <Avatar alt='User 1' src='/images/avatars/1.png' />
            <Avatar alt='User 2' src='/images/avatars/2.png' />
            <Avatar alt='User 3' src='/images/avatars/3.png' />
          </AvatarGroup>
        </Box>
      </CardContent>
    </Card>
  )
}

export default ChallengeHeader
