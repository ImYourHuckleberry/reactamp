import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { useStyles} from './styles'
import {NavMenu} from './NavMenu'
import { Redirect } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


export function CustomAppBar(props) {
    const classes = useStyles();
    const {editSearch} = props
    const [redirect, setRedirect]= useState([]);
    useEffect(() => {
      initializeRedirect();
    }, []);

    function initializeRedirect(){
      setRedirect(false)
    }

    function editSearchForm(e){
      editSearch(e.target.value)
    }

    function _handleKeyDown(e) {
      if (e.key === 'Enter') {
        setRedirect(true)
      }
    }

    return (
      
<div >
  {redirect===true && <Redirect to="/buy"/>}
        <AppBar position="static" style={{ background: '#3A9AFF' }}>
        <Toolbar >
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <NavMenu />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
          
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={editSearchForm}
              onKeyDown={_handleKeyDown} 
            />
          </div>
        </Toolbar>
      </AppBar>

 </div>
    )
}
