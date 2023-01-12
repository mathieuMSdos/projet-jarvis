import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const BtnAddMedia = ({btnLabel, btnUrl}) => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="BtnAddMedia__container"
      whileHover={{ y: "-4px" }}
      whileTap={{ scale: 0.9 }}
      onClick={() => navigate(`${btnUrl}`)}
    >
      <i className="ri-play-list-add-line"></i>
      <p>{btnLabel}</p>
    </motion.div>
  );
};
