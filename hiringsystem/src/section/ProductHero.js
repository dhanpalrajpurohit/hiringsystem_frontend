import * as React from 'react';
import { Box, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';
import backgroundImage from '../components/assets/images/homepage.jpg';


const useStyles = makeStyles({
  imagesilder: {
  overflow: "hidden",
  color: "#FFFFFF",
  height: "60vh",
  fontFamily:"Muli,sans-serif",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: `linear-gradient(to top, #3204fdba, rgba(31,43,123,0.8)), url(${backgroundImage}) no-repeat top center`,
  }
});

export default function ProductHero() {
  const classes = useStyles();
  return (
    <Box className={classes.imagesilder}>
      <Box>
        <div>
          <Typography variant='h3' component='h1'>Get Your Job</Typography>
        </div>
      </Box>
    </Box>
  );
}