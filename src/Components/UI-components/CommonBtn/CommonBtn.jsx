import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const CommonBtn = ({ textContent, bgColor }) => {
  const [width, setWidth] = useState(window.innerWidth);

  const changeWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", changeWidth);
    // cleanup function
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, [window.innerWidth]);

  return (
    <motion.button
    className="common__btn"
      style={{ backgroundColor: bgColor }}
      whileHover={{ y: "-4px" }}
      whileTap={{ scale: 0.9 }}
      type="submit"
    >
      {textContent}
    </motion.button>
  );
};
