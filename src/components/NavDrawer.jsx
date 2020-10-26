import * as React from 'react';
import {Drawer, Divider, List} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  drawer: {
    width: '200px'
  },
});

const NavDrawer = ({drawerOpen, setDrawerOpen}) => {
  const classes = useStyles();
  return (
    <Drawer className={classes.drawer} variant="permanent">
      <List>About/Rolam</List>
      <Divider/>
      <List>Earrings/Fulbevalok</List>
      <Divider/>
      <List>Ceramics/Keramiak</List>
      <Divider/>
      <List>Shopping Info/Postazas, Infok</List>
    </Drawer>
  );
};

export default NavDrawer;