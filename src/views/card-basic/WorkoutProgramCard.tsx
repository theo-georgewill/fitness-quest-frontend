// MUI Imports
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import AvatarGroup from '@mui/material/AvatarGroup'
import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'

// Utility function to get difficulty color
const getDifficultyColor = (difficulty: string) => {
  switch (difficulty.toLowerCase()) {
    case 'easy':
      return { bg: '#d4edda', text: '#155724' } // Light green
    case 'medium':
      return { bg: '#fff3cd', text: '#856404' } // Light yellow
    case 'hard':
      return { bg: '#f8d7da', text: '#721c24' } // Light red
    default:
      return { bg: '#e2e3e5', text: '#383d41' } // Grey fallback
  }
}

const WorkoutProgramCard = () => {
  const difficulty = 'Medium' // This could come from props or API
  const progress = 65 // Example progress %
  const { bg, text } = getDifficultyColor(difficulty)

  return (
    <Card>
		{/* Media with Progress Bar */}
		<Box sx={{ position: 'relative' }}>
			<CardMedia
				component="img"
				height="180"
				image="/images/cards/2.png"
				alt="Workout Program"
			/>
			<LinearProgress
				variant="determinate"
				value={progress}
				sx={{
					position: 'absolute',
					bottom: 0,
					left: 0,
					width: '100%',
					height: 6,
					borderRadius: 0
				}}
			/>
		</Box>

		<CardContent>
			{/* Header */}
			<div className="flex justify-between items-center flex-wrap gap-x-4 mbe-5 mbs-[30px]">
				<div className="flex flex-col items-start">
					<Typography variant="h5">Program Title</Typography>
					<Typography variant="body2">30 days</Typography>
				</div>
				<Box
					component="span"
					sx={{
					px: 1.5,
					py: 0.5,
					borderRadius: '4px',
					border: `1px solid ${text}`,
					backgroundColor: bg,
					color: text,
					fontWeight: 500,
					fontSize: '0.8rem',
					display: 'inline-block'
					}}
				>
					{difficulty}
				</Box>
			</div>

			{/* Description + CTA */}
			<Typography sx={{ py: 4 }} variant="subtitle1" color="text.disabled">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
			impedit laboriosam magni placeat incidunt nam! Necessitatibus, quasi
			exercitationem impedit iure illum enim nesciunt. Tenetur ipsa
			exercitationem delectus. Quisquam, in nam?
			</Typography>
			<Button sx={{ my: 6 }} variant="contained">
			Continue Challenge
			</Button>

			{/* Social Footer */}
			<div className="flex justify-between items-center flex-wrap gap-x-4 gap-y-2">
			<Typography sx={{ mt: 8 }} variant="subtitle1" color="text.disabled">
				18+ Challengers
			</Typography>
			<AvatarGroup max={4}>
				<Avatar src="/images/avatars/1.png" />
				<Avatar src="/images/avatars/5.png" />
				<Avatar src="/images/avatars/4.png" />
				<Avatar src="/images/avatars/6.png" />
				<Avatar src="/images/avatars/7.png" />
				<Avatar src="/images/avatars/8.png" />
			</AvatarGroup>
			</div>
		</CardContent>
    </Card>
  )
}

export default WorkoutProgramCard
