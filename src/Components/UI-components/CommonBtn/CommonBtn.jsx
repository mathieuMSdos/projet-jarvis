import React from "react";
import { motion } from "framer-motion";

export const CommonBtn = ({ textContent, bgColor }) => {
  return (
    <motion.button
      style={{ backgroundColor: bgColor }}
      whileHover={{ y: "-4px" }}
      whileTap={{ scale: 0.9 }}
      type="submit"
    >
      {textContent}
    </motion.button>
  );
};
