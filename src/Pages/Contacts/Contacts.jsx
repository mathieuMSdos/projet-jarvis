import React from "react";
import { motion } from "framer-motion";

export const Contacts = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.2, delay: 0.1 }}
        className="contact__container"
      >
        <h1 className="contact__h1">Contacts</h1>
        <ul className="contact__content">
          <h4>Equipe Back-End: </h4>
          <li>
            <span>François Fric :</span> Product-Owner & Lead-Back
          </li>
          <li>
            <span>Yvonnick Solon :</span> Scrum Master
          </li>

          <h4>Equipe Front-End:</h4>
          <li>
            <span>Mathieu Mehdi Souzani :</span> Lead-Front
          </li>
          <li>
            <span>Melvyn Dehm :</span> Git Master
          </li>
          <li>
            <span>Edouard Martin :</span> Réferent Techno
          </li>
        </ul>
      </motion.div>
    </>
  );
};
