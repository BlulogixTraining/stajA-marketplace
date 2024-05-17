import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}$`;
}

export default function RangeSlider() {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ 
      width: 250, 
      '& .MuiSlider-thumb': {
        width: 22, // Customize thumb size
        height: 22, // Customize thumb size
        backgroundColor: 'black', // Customize thumb color
      },
      '& .MuiSlider-rail': {
        backgroundColor: 'lightgray', // Customize rail color
        height: 8,
      },
      '& .MuiSlider-track': {
        backgroundColor: 'black', // Customize track color
        height: 8,
      },
    }}>
      <Slider
        getAriaLabel={() => 'Price range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        valueLabelFormat={valuetext}
      />
    </Box>
  );
}
