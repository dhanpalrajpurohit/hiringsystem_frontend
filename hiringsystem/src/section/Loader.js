import React from 'react';
import { makeStyles } from '@mui/styles';
import backgroundImage from '../components/assets/images/logo.png';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {CircularProgress} from '@mui/material';

const theme = createTheme({
    components: {
      MuiCircularProgress:{
        styleOverrides:{
            svg:{
                backgroundImage:`url(${backgroundImage})`,
                width:'50px',
            },
            circle:{
                color:'white'
            }
        }
      }
    },
  });

const useStyles = makeStyles({
    loader: {
        height: "100vh",
        width: "200px",
        position:"fixed",
        zIndex:999,
        justifyContent: "center",
        alignItems: "center",
        background: `#fff url(${backgroundImage})`,
    }
});

export default function Loader() {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <CircularProgress className={classes.loader} size="100px"/>
        </ThemeProvider>
    )
}