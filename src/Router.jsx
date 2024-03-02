import React, { memo } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import Units from "./pages/units/Units";
// import Exercise from "./pages/exercise/Exercise";

const Router = () => {
  return (
    <div className="router_page">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/unit" element={<Units />} />
        </Route>
      </Routes>
    </div>
  );
};

export default memo(Router);
