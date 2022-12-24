import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const BtnPreviousPage = ({ bgColor }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      whileTap={{ scale: 0.9 }}
      onClick={() => navigate(-1)}
      className="Btn-previous-page"
    >
      <i class="ri-arrow-go-back-line"></i>
      <p>Revenir</p>
    </motion.div>
  );
};
