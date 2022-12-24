import Reacts from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import apiEndPoints from "../../Utils/utilsApi";
import { useSelector } from "react-redux";

export const Footer = () => {
  // Redux Part
  const userRole = useSelector((state) => state.userRole.userRole);

  return (
    <motion.div
      className="footer__container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.1 }}
    >
      <p>Team Jarvis - 2023</p>
      <div className="footer_links-container">
        <NavLink to="/contacts">Contacts</NavLink>
        <NavLink to="/legal-notices">Mentions légales</NavLink>
        {userRole === "ROLE_ADMIN" ? (
          <a href={apiEndPoints.urlBackOffice}>Admin</a>
        ) : (
          ""
        )}
      </div>
      <div className="rights__container">
        <p>creative commons rights</p>
        <i className="ri-creative-commons-line"></i>
      </div>
    </motion.div>
  );
};
