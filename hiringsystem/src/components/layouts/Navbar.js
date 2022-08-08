import { Box, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';

import React from 'react';

const useStyles = makeStyles({
    root: {
      color:'black'
    },
  });

function Navbar() {
    const classes = useStyles();
    return (
    <Box>
        <nav className={classes.root}>
            <Link>Home</Link>
            <Link>Contact Us</Link>
        </nav>
    </Box>
  )
}

export default Navbar;
