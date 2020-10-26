import * as React from 'react';
import {IconButton} from '@material-ui/core'

const Header = ({english, setEnglish}) => {
  const handleLanguageChange = () => {
    setEnglish(!english)
  }

  return (
    <div className="title">
      <div className='titletop'>
      <IconButton>
        <span role='img' aria-label='menu-X'>𝗫</span>
      </IconButton>
      <img src={require("../images/logo.png")} alt="rozagyurta logo" />
      <IconButton onClick={handleLanguageChange}>
        {!english?
        <span role='img' aria-label='englishflag'>🇬🇧</span>:
        <span role='img' aria-label='hungarianflag'>🇭🇺</span>
      }
      </IconButton>
      </div>
      {/* <h1>making nice things makes me happy</h1> */}
      <div className='divider' />
      
    </div>
  );
};

export default Header;