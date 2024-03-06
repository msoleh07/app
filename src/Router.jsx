import React, { memo } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import Exercise from "./pages/exercise/Exercise";
import Learn from "./pages/learn/Learn";
import Units from "./pages/units/Units";
import DragAndDrop from "./pages/dragAndDrop/DragAndDrop";
import UnitExercise from "./pages/unitexercise/UnitExercise";

const Router = () => {
  return (
    <div className="router_page">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/exercise" element={<Exercise />} />
          <Route path="/learntext" element={<Learn />} />
          <Route path="/drag" element={<DragAndDrop />} />
          <Route path="/units" element={<Units />} />
          <Route path="/unitexercise" element={<UnitExercise />} />
        </Route>
      </Routes>
    </div>
  );
};

export default memo(Router);
