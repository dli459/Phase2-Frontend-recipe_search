import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Avatar } from '@mui/material';
import { useAppSelector } from '../store/hooks';

export default function ButtonAppBar() {
  const user = useAppSelector(state => state.user);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary" >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >

          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            RECIPE SEARCH
          </Typography>

          {user.id ? <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Avatar alt={user.username} src={user.avatar} />
            <Typography variant="h6" component="div" sx={{ ml: 2 }}>
              {user.username}
            </Typography>
          </Box> : <></>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
