import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { SignOut } from '../utils/auth';
import { Navigate, Routes } from 'react-router';

export default function HeaderBar() {
  const [signOut, setSignOut] = React.useState<boolean>(false);

  const haha = () => {
    SignOut();
    setSignOut(true);
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* {(signOut) ? <Redirect to="/somewhere/else" /> : <></>} */}

      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Wellcome
          </Typography>
          {/* <Button color="inherit" onClick={haha}>Sign out</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
