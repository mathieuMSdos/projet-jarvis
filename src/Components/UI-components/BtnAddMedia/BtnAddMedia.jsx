import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const BtnAddMedia = ({ btnLabel, btnUrl }) => {
  const navigate = useNavigate();

  const [width, setWidth] = useState(window.innerWidth);

  const changeWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", changeWidth);
    console.log(width);
    // cleanup function
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, [window.innerWidth]);

  return (
    <motion.div
      className="BtnAddMedia__container"
      whileHover={{ y: "-4px" }}
      whileTap={{ scale: 0.9 }}
      onClick={() => navigate(`${btnUrl}`)}
    >
      {width < 420 ? (
        <>
          <i className="ri-play-list-add-line"></i>
        </>
      ) : (
        <>
          <i className="ri-play-list-add-line"></i>
          <p>{btnLabel}</p>
        </>
      )}
    </motion.div>
  );
};
