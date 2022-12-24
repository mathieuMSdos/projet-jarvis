import React from "react";
import { motion } from "framer-motion";

export const AnimatedTitle = () => {
  return (
    <div className="animatedTitle__container">
      <motion.h1
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "-100%" }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        Bientôt disponible...
      </motion.h1>
      <motion.div
        className="wrapper"
        initial={{ y: "200%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "200%" }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <span className="circle circle-1"></span>
        <span className="circle circle-2"></span>
        <span className="circle circle-3"></span>
        <span className="circle circle-4"></span>
        <span className="circle circle-5"></span>
        <span className="circle circle-6"></span>
        <span className="circle circle-7"></span>
        <span className="circle circle-8"></span>
      </motion.div>
    </div>
  );
};
