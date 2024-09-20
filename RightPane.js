

import React from 'react';
import { Box, Typography, Paper, LinearProgress, Divider } from '@mui/material';

const RightPane = () => {
  // Sample prediction data
  const prediction = {
    disease: 'Epilepsy',
    confidence: 95,
    severity: 'High',
    indicators: {
      spikeFrequency: '5 spikes/sec',
      amplitude: '150 µV',
    },
    suggestedActions: ['Consult a Neurologist', 'Further Testing Required'],
  };

  // Determine color based on confidence
  const getColor = (confidence) => {
    if (confidence > 80) return 'red';
    if (confidence > 50) return 'yellow';
    return 'green';
  };

  return (
    <Box sx={{ width: '35%', display: 'flex', flexDirection: 'column' }}>
      {/* Disease Prediction */}
      <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
        <Typography variant="h5" gutterBottom>
          Disease Prediction
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            {prediction.disease}
          </Typography>
          <Box sx={{ width: '60%', mr: 1 }}>
            <LinearProgress
              variant="determinate"
              value={prediction.confidence}
              sx={{
                height: 10,
                borderRadius: 5,
                [`& .MuiLinearProgress-bar`]: {
                  backgroundColor: getColor(prediction.confidence),
                },
              }}
            />
          </Box>
          <Typography variant="body2" color="text.secondary">
            {prediction.confidence}%
          </Typography>
        </Box>
      </Paper>

      {/* Detailed Analysis */}
      <Paper elevation={3} sx={{ padding: 2, marginBottom: 2, flex: 1, overflow: 'auto' }}>
        <Typography variant="h6" gutterBottom>
          Detailed Analysis
        </Typography>
        <Divider sx={{ marginBottom: 1 }} />
        {/* Key Indicators */}
        <Typography variant="subtitle1">Key Indicators:</Typography>
        <Typography variant="body2">
          Spike Frequency: {prediction.indicators.spikeFrequency}
        </Typography>
        <Typography variant="body2">
          Amplitude: {prediction.indicators.amplitude}
        </Typography>

        {/* Additional Graphs Placeholder */}
        <Box sx={{ marginTop: 2 }}>
          <Typography variant="subtitle1">Power Spectral Density:</Typography>
          {/* Placeholder for additional graphs */}
          <Box sx={{ height: 150, backgroundColor: '#e0e0e0', borderRadius: 1, marginTop: 1 }}>
            {/* Implement additional graphs as needed */}
            <Typography variant="body2" align="center" sx={{ paddingTop: 6 }}>
              Power Spectral Density Graph
            </Typography>
          </Box>
        </Box>

        {/* Explanation */}
        <Box sx={{ marginTop: 2 }}>
          <Typography variant="subtitle1">Explanation:</Typography>
          <Typography variant="body2">
            The prediction is based on the observed spike frequency and amplitude in the EEG data, which are indicative of epileptic activity.
          </Typography>
        </Box>
      </Paper>

      {/* Suggested Actions */}
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Typography variant="h6" gutterBottom>
          Suggested Actions
        </Typography>
        <ul>
          {prediction.suggestedActions.map((action, index) => (
            <li key={index}>
              <Typography variant="body2">{action}</Typography>
            </li>
          ))}
        </ul>
      </Paper>
    </Box>
  );
};

export default RightPane;
