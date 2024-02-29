import React, { memo } from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_container">Footer</div>
      </div>
    </footer>
  );
};

export default memo(Footer);
