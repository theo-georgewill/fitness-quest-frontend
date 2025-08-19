'use client';

import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExerciseCard from './ExerciseCard';

interface Day {
  day: string;
  exercises: { name: string; reps: string }[];
}

interface WorkoutDaysAccordionProps {
  days: Day[];
}

export default function WorkoutDaysAccordion({ days }: WorkoutDaysAccordionProps) {
  return (
    <>
      {days.map((day, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{day.day}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {day.exercises.map((exercise, i) => (
              <ExerciseCard key={i} name={exercise.name} reps={exercise.reps} />
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
}
