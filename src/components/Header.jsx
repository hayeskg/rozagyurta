import React from 'react';

const Header = () => {
  return (
    <div className="title">
      <img src={require("../images/logo.png")} alt="rozagyurta logo" />
      <h3>making nice things makes me happy</h3>
    </div>
  );
};

export default Header;