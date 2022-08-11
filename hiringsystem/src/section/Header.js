import * as React from 'react';
import { Container } from '@mui/system';
import AppBar from '../components/layouts/AppBar';
import Toolbar from '../components/layouts/Toolbar';
import { makeStyles } from '@mui/styles';
import logo from '../components/assets/images/logo.png';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


const useStyles = makeStyles({
  toolbar: {
    justifyContent:'space-between',
  },
  authmenu:{
    background:'#fb246a'
  }
  
});

const navItems = ['Home',"Find a Job", "About", "Contact", "Page"];
const authMenu = ["Sign Up", "Sign In"];

function AppAppBar() {
  const classes = useStyles();
  return (
    <Container fixed>
      <AppBar position="fixed" sx={{backgroundColor:'common.white'}}>
        <Toolbar className={classes.toolbar}>
            <div>
              <img src={logo} alt="job finder logo" />
            </div>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Button key={item}>
                  {item}
                </Button>
              ))}
            </Box>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }} className={classes.authmenu}>
              {authMenu.map((item) => (
                <Button key={item}>
                  {item}
                </Button>
              ))}
            </Box>
        </Toolbar>

      </AppBar>
      <Toolbar />
    </Container>
  );
}

export default AppAppBar;