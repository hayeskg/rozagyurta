import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
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
            english?
              <Link to={"/"+title.en.toString().toLowerCase()}>
                <h2>{title.en}</h2>
              </Link>:
              <Link to={"/"+title.en.toString().toLowerCase()}>
                <h2>{title.hun}</h2>
              </Link>
          )
        })}

        {/* {!english?
          nav.en.map(title=>{
            return (
              <Link to={"/"+title.toString().toLowerCase()}>
                <h2>{title}</h2>
              </Link>
            )       
          }):
          nav.hun.map(title=>{
            return (
              <Link to={"/"+title.toString().toLowerCase()}>
                <h2>{title}</h2>
              </Link>
            )
          })
        } */}
    </div>
   </Router>
  );
};

export default NavBar;