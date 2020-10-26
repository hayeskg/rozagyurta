import * as React from 'react';
// import NavDrawer from './NavDrawer';
import {IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  button: {
    background: '#efa3c9',
    margin: '5px',
    border: 0,
    borderRadius: 30,
    color: 'white',
    height: 60,
    width: 60,
  },
});

const Header = ({english, setEnglish}) => {
  const classes = useStyles();

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleLanguageChange = () => {
    setEnglish(!english)
  }

  const handleNavDrawer = () =>{
    setDrawerOpen(!drawerOpen)
  }

  return (
    <div className="title">
      <div className='titletop'>
      <IconButton size='medium' className={classes.button} onClick={handleNavDrawer}>
        {!drawerOpen?<MenuIcon/>:<ChevronLeftIcon />}
      </IconButton>
      {/* {drawerOpen?<NavDrawer drawerOpen = {drawerOpen} setDrawerOpen={setDrawerOpen}/>:null} */}
      <img src={require("../images/logo.png")} alt="rozagyurta logo" />
      <IconButton size='medium' className={classes.button} onClick={handleLanguageChange}>
        {english?
        <span role='img' aria-label='englishflag'>🇬🇧</span>:
        <span role='img' aria-label='hungarianflag'>🇭🇺</span>
      }
      </IconButton>
      </div>
      <div className='divider' />
    </div>
  );
};

export default Header;