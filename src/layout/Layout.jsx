import React, { memo } from "react";
import "./Layout.css";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const Layout = () => {
  return (
    <div className="layout_page">
      <Header />
      <main className="main_layout">
        <div className="container">
          <div className="main_container">{<Outlet />}</div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default memo(Layout);
