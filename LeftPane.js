import React, { useState } from 'react';
import { Box, Button, Select, MenuItem, FormControl, InputLabel, Slider } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const generateMockEEGData = () => {
  const data = [];
  for (let i = 0; i <= 100; i++) {
    data.push({
      time: i,
      channel1: Math.sin(i / 10) + Math.random() * 0.5,
      channel2: Math.cos(i / 10) + Math.random() * 0.5,
      channel3: Math.sin(i / 5) + Math.random() * 0.5,
    });
  }
  return data;
};

const LeftPane = () => {
  const [data] = useState(generateMockEEGData());
  const [selectedChannels, setSelectedChannels] = useState(['channel1', 'channel2', 'channel3']);
  const [zoom, setZoom] = useState(100);

  const handleChannelChange = (event) => {
    setSelectedChannels(event.target.value);
  };

  const handleZoomChange = (event, newValue) => {
    setZoom(newValue);
  };

  return (
    <Box sx={{ flex: 1, marginRight: 2, display: 'flex', flexDirection: 'column' }}>
      {/* EEG Graph */}
      <Box sx={{ flex: 1 }}>
        <LineChart
          width={600}
          height={400}
          data={data.slice(0, zoom)}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          {selectedChannels.includes('channel1') && <Line type="monotone" dataKey="channel1" stroke="#8884d8" />}
          {selectedChannels.includes('channel2') && <Line type="monotone" dataKey="channel2" stroke="#82ca9d" />}
          {selectedChannels.includes('channel3') && <Line type="monotone" dataKey="channel3" stroke="#ff7300" />}
        </LineChart>
      </Box>

      {/* Controls */}
      <Box sx={{ marginTop: 2, display: 'flex', alignItems: 'center' }}>
        {/* Play/Pause Buttons */}
        <Button variant="contained" color="primary" sx={{ marginRight: 1 }}>
          Play
        </Button>
        <Button variant="contained" color="secondary" sx={{ marginRight: 2 }}>
          Pause
        </Button>

        {/* Slider for navigation */}
        <Box sx={{ width: 200, marginRight: 2 }}>
          <Slider
            value={zoom}
            onChange={handleZoomChange}
            aria-labelledby="zoom-slider"
            min={10}
            max={100}
          />
        </Box>

        {/* Channel Selection */}
        <FormControl variant="standard" sx={{ minWidth: 150, marginRight: 2 }}>
          <InputLabel id="channel-select-label">Channels</InputLabel>
          <Select
            labelId="channel-select-label"
            id="channel-select"
            multiple
            value={selectedChannels}
            onChange={handleChannelChange}
            label="Channels"
          >
            <MenuItem value="channel1">Channel 1</MenuItem>
            <MenuItem value="channel2">Channel 2</MenuItem>
            <MenuItem value="channel3">Channel 3</MenuItem>
          </Select>
        </FormControl>

        {/* Toggle View Button */}
        <Button variant="outlined" color="primary">
          Toggle View
        </Button>
      </Box>
    </Box>
  );
};

export default LeftPane;
