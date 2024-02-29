import React, { memo } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";

const Router = () => {
  return (
    <div className="router_page">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/rout" element={<h1>rout</h1>} />
        </Route>
      </Routes>
    </div>
  );
};

export default memo(Router);
