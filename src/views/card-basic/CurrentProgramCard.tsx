"use client";

import React from "react";
import { Card, CardContent, CardActions, Typography, Button, LinearProgress, Box } from "@mui/material";

type CurrentProgramCardProps = {
  name: string;
  progress: number; // 0–100
  onContinue: () => void;
};

const CurrentProgramCard: React.FC<CurrentProgramCardProps> = ({ name, progress, onContinue }) => {
  return (
    <Card sx={{ width: '100%', borderRadius: 3, boxShadow: 3 }}>
      <CardContent>
        {/* Program Name */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          {name}
        </Typography>

        {/* Progress Bar */}
        <Box display="flex" alignItems="center" gap={2} mb={1}>
          <Box flexGrow={1}>
            <LinearProgress
              variant="determinate"
              value={progress}
              sx={{ height: 8, borderRadius: 5 }}
            />
          </Box>
          <Typography variant="body2" color="text.secondary">
            {progress}%
          </Typography>
        </Box>
      </CardContent>

      {/* Continue Button */}
      <CardActions>
        <Button
          variant="contained"
          color="primary"
          onClick={onContinue}
          
        >
          Continue Workout
        </Button>
      </CardActions>
    </Card>
  );
};

export default CurrentProgramCard;
