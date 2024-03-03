import React, { memo } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import Exercise from "./pages/exercise/Exercise";
import Learn from "./pages/learn/Learn";
import Units from "./pages/units/Units";
import DragAndDrop from "./pages/dragAndDrop/DragAndDrop";

const Router = () => {
  return (
    <div className="router_page">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/exercise" element={<Exercise />} />
          <Route path="/learntext" element={<Learn />} />
          <Route path="/unit" element={<Units />} />
          <Route path="/drag" element={<DragAndDrop />} />
        </Route>
      </Routes>
    </div>
  );
};

export default memo(Router);
