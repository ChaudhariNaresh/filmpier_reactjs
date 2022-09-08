import React from 'react';
import {
  AppBar,
  IconButton,
  Toolbar,
  // Drawer,
  Button,
  Avatar,
  useMediaQuery,
} from '@mui/material';
import {
  Brightness7,
  Menu,
  // AccountCircle,
  Brightness4,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

import useStyles from './styles';

const NavBar = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:600px)');
  const theme = useTheme();
  const isAuthenticated = true;

  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolBar}>
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              style={{ outline: 'none' }}
              onClick={() => {}}
              className={classes.menuButton}
            >
              <Menu />
            </IconButton>
          )}
          <IconButton color="inherit" sx={{ ml: 1 }} onClick={() => {}}>
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {!isMobile && 'Search....'}
          <div>
            {!isAuthenticated ? (
              <Button color="inherit" onClick={() => {}}>
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <Button
                color="inherit"
                component={Link}
                to="/profile/123"
                className={classes.linkButton}
                onClick={() => {}}
              >
                {!isMobile && <>Movies &nbsp;</>}
                <Avatar />
              </Button>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
