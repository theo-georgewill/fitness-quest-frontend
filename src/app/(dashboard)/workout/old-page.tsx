'use client'
// MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

// Components Imports
import CardHero from '@views/card-basic/CardHero'
import CurrentProgramCard from '@views/card-basic/CurrentProgramCard'
import WorkoutProgramCard from '@views/card-basic/WorkoutProgramCard'

const WorkoutPrograms = () => {
	return (
		<Grid container spacing={6}>
			<Grid item xs={12} sm={12} md={12}>
				<CardHero />
			</Grid>
			<Grid item xs={12} sm={12} md={12}>
				<CurrentProgramCard name={'Current Workout'} progress={80} onContinue={() => console.log("Continuing workout...")} />
			</Grid>
			<Grid item xs={12} sm={6} md={4}>
				<WorkoutProgramCard />
			</Grid>
			<Grid item xs={12} sm={6} md={4}>
				<WorkoutProgramCard />
			</Grid>
			<Grid item xs={12} sm={6} md={4}>
				<WorkoutProgramCard />
			</Grid>
		</Grid>
	)
}

export default WorkoutPrograms;
