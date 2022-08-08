import * as React from 'react';
import { Container } from '@mui/system';
import AppBar from '../components/layouts/AppBar';
import Toolbar from '../components/layouts/Toolbar';

import logo from '../components/assets/images/logo.png';
import Navbar from '../components/layouts/Navbar'; 


function AppAppBar() {
  return (
    <Container fixed>
      <AppBar position="fixed" sx={{backgroundColor:'common.white'}}>
        <Toolbar sx={{ justifyContent: 'left' }}>
          <img src={logo} />
          <Navbar />
        </Toolbar>

      </AppBar>
      <Toolbar />
    </Container>
  );
}

export default AppAppBar;