import React from 'react';

const Contact = () => {
  return (
    <div className="contact">
      <figure >
        <a href="https://www.instagram.com/rozagyurta/">
          <img src={require("../images/contact/insta.jpg")} alt="Instagram logo" />
        </a>
      </figure>
      <figure>
        <a href="https://www.facebook.com/rozagyurta/">
          <img src={require("../images/contact/facebook.jpg")} alt="Facebook logo" />
        </a>
      </figure>
      <figure>
        <a href="mailto:rozagyurta@gmail.com?Subject=Hello">
          <img src={require("../images/contact/mail.jpg")} alt="email logo" />
        </a>
      </figure>
    </div>
  );
};

export default Contact;