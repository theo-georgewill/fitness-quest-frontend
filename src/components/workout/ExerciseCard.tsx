'use client';

import { Card, CardContent, Typography } from '@mui/material';

interface ExerciseCardProps {
  name: string;
  reps: string;
}

export default function ExerciseCard({ name, reps }: ExerciseCardProps) {
  return (
    <Card variant="outlined" sx={{ mb: 1 }}>
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {reps}
        </Typography>
      </CardContent>
    </Card>
  );
}
