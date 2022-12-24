import React, { useEffect } from "react";
import { LogInForm } from "../../Components/LogInForm/LogInForm";
import welcomeImg from "../../Assets/welcome.png";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { setUserLog } from "../../ReduxToolKit/Reducers/userLog.slice";
import { NavLink } from "react-router-dom";
import { LogoJarvis } from "../../Components/UI-components/LogoJarvis/LogoJarvis";

export const WelcomePage = () => {
  const dispatch = useDispatch();

  return (
    <div className="welcomePage__global-container">
      <div className="welcomePage__logo-container">
        <NavLink to="/">
          <LogoJarvis />
        </NavLink>
      </div>

      <div className="welcome__container">
        <div className="content__container">
          <div className="title__container">
            <motion.h1
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              Votre <span>meilleur</span> <br /> gestionnaire <br /> de{" "}
              <span>médias !</span>
            </motion.h1>

            <motion.h2
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              Créez, organisez, et gérez votre médiathèque grâce à l'application
              Jarvis <span>😉</span> !
            </motion.h2>
          </div>

          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="welcome__login-container"
          >
            <LogInForm />
          </motion.div>
        </div>
        <div className="welcomeImg__container">
          <motion.img
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            src={welcomeImg}
            alt="welcomeImg"
          />
        </div>
      </div>
    </div>
  );
};
