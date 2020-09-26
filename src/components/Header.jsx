import React from 'react';

const Header = () => {
  return (
    <div className="title">
      <img src={require("../images/logo.png")} alt="rozagyurta logo" />
      <h1>making nice things makes me happy</h1>
    </div>
  );
};

export default Header;