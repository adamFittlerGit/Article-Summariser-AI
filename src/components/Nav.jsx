import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { logo, github } from "../assets";

const Nav = () => {
  return (
    <AppBar
      className="w-3/4 mx-auto"
      style={{ backgroundColor: 'white' }}  // Set background color explicitly
    >
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          {/* Left link */}
          <img src={logo} alt='sumz_logo' className='w-28 object-contain' />
        </IconButton>
        <div style={{ flex: 1 }} />
        {/* GitHub link */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() =>
            window.open("https://github.com/TidbitsJS/Summize", "_blank")
          }
        >
          <img
            src={github}
            alt='github_logo'
            style={{ width: '24px', height: '24px' }}  // Adjust size as needed
          />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
