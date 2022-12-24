import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const BtnAddMedia = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="BtnAddMedia__container"
      whileHover={{ y: "-4px" }}
      whileTap={{ scale: 0.9 }}
      onClick={() => navigate("/private/private-add-media")}
    >
      <i className="ri-play-list-add-line"></i>
      <p>Ajouter un média</p>
    </motion.div>
  );
};
