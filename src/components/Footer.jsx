import React from 'react';

const text1 = 'built with  '
const text2 = '  by listt.io'

const Footer = () => {
  return (
    <div className="footer">
      <a
        href="https://listt.io/"
        rel="kristofhayes.me"
      >
        {text1}
        <span role='img' aria-label="love">
          ❤️
        </span>
        {text2}
      </a>
    </div>
  );
};

export default Footer;