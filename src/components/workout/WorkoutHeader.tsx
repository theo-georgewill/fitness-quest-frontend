'use client';

import { Card, CardContent, Typography, LinearProgress } from '@mui/material';

interface WorkoutHeaderProps {
  title: string;
  progress: number; // 0 to 100
}

export default function WorkoutHeader({ title, progress }: WorkoutHeaderProps) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>{title}</Typography>
        <Typography variant="body2">Challenge Progress</Typography>
        <LinearProgress variant="determinate" value={progress} sx={{ mt: 1 }} />
      </CardContent>
    </Card>
  );
}
