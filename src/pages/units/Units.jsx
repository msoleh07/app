import React, { memo } from "react";
import "./Units.css";
import { unitsData } from "../../static/units";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Units = () => {
  return (
    <div className="units_page">
      <div className="container">
        <motion.div
          className="units_container"
          initial={{ x: "80vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            type: "spring",
            stiffness: 80,
          }}
        >
          <ul>
            {unitsData?.map((item, inx) => (
              <motion.li
                key={inx}
                initial={{ x: "100vw", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.7,
                  duration: 0.7,
                  times: 0.1,
                }}
              >
                <div className="circle">
                  <b>{inx + 1}</b>
                </div>
                <Link to={item?.link} className="unit_text">
                  {item?.title}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default memo(Units);
