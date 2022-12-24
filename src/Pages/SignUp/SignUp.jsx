import React from "react";
import { SignUpForm } from "../../Components/SignUpForm/SignUpForm";
import { motion } from "framer-motion";
import signUpImg from "../../Assets/Saly-25.png";
import { NavLink } from "react-router-dom";
import { LogoJarvis } from "../../Components/UI-components/LogoJarvis/LogoJarvis";

export const SignUp = () => {
  return (
    <div className="signupPage__global-container">
      <div className="signupPage__logo-container">
        <NavLink to="/">
          <LogoJarvis />
        </NavLink>
      </div>
      <div className="signup__container">
          <div className="signupImg__container">
              <motion.img
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.6, delay: 0.4 }}
                src={signUpImg}
                alt="welcomeImg"
              />
            </div>
          <div className="signup__title-container">
            <motion.h1
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              Veuillez vous <span>inscrire</span> <br /> pour configurer <br />{" "}
              votre <span>médiathèque !</span>
            </motion.h1>

            <motion.h2
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              Faisons connaissance afin de profiter pleinement de tous les
              services de l'application Jarvis !
            </motion.h2>
          
          </div>
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="signUpPage__form-container"
          >
            <SignUpForm />
          </motion.div>
        </div>
    </div>
  );
};
