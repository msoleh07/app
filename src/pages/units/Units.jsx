import React, { memo } from "react";
import "./Units.css";
import { useNavigate } from 'react-router-dom'
const Units = () => {
  const navigate = useNavigate()
  return (
    <div className="units_page">
      <div className="container">
        <div className='unit_exercise' onClick={() => navigate('/unitexercise')}>
          <b className='unit_exercise_number'>1</b>
          <b className='unit_exercise_title'>Fisrt Theme</b>
        </div>
        <div className='unit_exercise'>
          <b className='unit_exercise_number'>2</b>
          <b className='unit_exercise_title'>Second Theme</b>
        </div>
        <div className='unit_exercise'>
          <b className='unit_exercise_number'>3</b>
          <b className='unit_exercise_title'>Third Theme</b>
        </div>
        <div className='unit_exercise'>
          <b className='unit_exercise_number'>4</b>
          <b className='unit_exercise_title'>Fourth Theme</b>
        </div>
        <div className='unit_exercise'>
          <b className='unit_exercise_number'>5</b>
          <b className='unit_exercise_title'>Fifth Theme</b>
        </div>
      </div>
    </div>
  );
};

export default memo(Units);
