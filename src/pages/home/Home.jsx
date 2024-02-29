import React, { memo } from "react";
import "./Home.css";
import book from "../../assets/book.jpeg";

const Home = () => {
  return (
    <div className="home_page">
      <div className="container">
        <div className="home_container">
          <div className="img_container">
            <img src={book} alt="" />
          </div>
          <div className="buttons_container">
            <button className="start">Start</button>
            <button className="btn_next">Cilick</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
