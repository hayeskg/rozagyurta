import React from 'react';
import {
  BrowserRouter as Router,
  // Switch,
  // Route,
  Link
} from "react-router-dom";

const nav=[
  {
    en: 'About',
    hun: 'Rólam'
  },
  {
    en: 'Earrings',
    hun: 'Fülbevalók'
  },
  {
    en: 'Ceramics',
    hun: 'Kerámiák'
  },
  {
    en: 'Info',
    hun: 'Infók'
  }
]

const NavBar = ({english}) => {
  return (
    <Router>
      <div className='nav'>
        {nav.map((title)=>{
          return(
              <Link to={"/"+title.en.toString().toLowerCase()}>
                <h3>{
                english?
                title.en: 
                title.hun
                }</h3>
              </Link>
          )
        })}
    </div>
   </Router>
  );
};

export default NavBar;