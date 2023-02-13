import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const SearchButton = ({ textContent, bgColor }) => {
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
    <>
      {width < 420 ? (
        <motion.button
          style={{ backgroundColor: bgColor }}
          whileHover={{ y: "-4px" }}
          whileTap={{ scale: 0.9 }}
          type="submit"
        >
          <i className="ri-search-line"></i>
        </motion.button>
      ) : (
        <motion.button
          style={{ backgroundColor: bgColor }}
          whileHover={{ y: "-4px" }}
          whileTap={{ scale: 0.9 }}
          type="submit"
        >
          {textContent}
        </motion.button>
      )}
    </>
  );
};
