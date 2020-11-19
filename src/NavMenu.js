import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import MenuIcon from '@material-ui/icons/Menu';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
export function NavMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button variant="outlined" size="large" aria-controls="fade-menu" aria-haspopup="true" style={{background:"#408DD1"}}onClick={handleClick}>
       <MenuIcon/>
      </Button>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
          <Router>
        <MenuItem onClick={handleClose}><a href="/buy">Buy</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="/sell">Sell</a></MenuItem>
        
    <MenuItem onClick={handleClose}><a href="/profile">Profile</a></MenuItem>
    </Router>
      </Menu>
    </div>
  );
}