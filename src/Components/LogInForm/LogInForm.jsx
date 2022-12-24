import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, NavLink } from "react-router-dom";
import apiEndPoints from "../../Utils/utilsApi";
import skipLogin from "../../Utils/utilsApi";
import { motion } from "framer-motion";
import { CommonBtn } from "../UI-components/CommonBtn/CommonBtn";
import { useDispatch, useSelector } from "react-redux";
import { setUserLog } from "../../ReduxToolKit/Reducers/userLog.slice";
import colorScss from "../../Style/_settings.scss";

export const LogInForm = () => {
  // Redux Part
  const dispatch = useDispatch();
  const userLog = useSelector((state) => state.userLog.userLog);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submit, setSubmit] = useState(null);
  const [errorMessage, setErrorMessage] = useState(false);

  //**************************** to start app when backend is down ****************************
  // if (skipLogin) {
  //   localStorage.setItem("token", "12345");
  //   //set token auth inside ReduxStore if local storage contain "token"
  //   const tokenId = localStorage.getItem("token");
  //   if (tokenId !== null) {
  //     dispatch(setUserLog(tokenId));
  //   }
  // }
  // **********************************************************************
  // React part :

  const handleSubmit = (event) => {
    event.preventDefault();
    const dataUser = {
      username: username,
      password: password,
    };
    setSubmit(dataUser);

    setUsername("");
    setPassword("");
  };

  useEffect(() => {
    if (submit) {
      // post request to database to send informations for connexion
      axios
        .post(`${apiEndPoints.apiAdress}${apiEndPoints.logIn}`, submit)
        .then((res) => {
          console.log(res.code);
          if (res.status === 200) {
            //  set token auth inside the local storage
            localStorage.setItem("token", res.data.token);
            // console.log(jwt.decode(res.data.token));
            //set token auth inside ReduxStore if local storage contain "token"
            const tokenId = localStorage.getItem("token");
            if (tokenId !== null) {
              dispatch(setUserLog(tokenId));
            }
          }
        })
        .catch((err) => setErrorMessage(!errorMessage));
    }
  }, [submit]);

  console.log(errorMessage);

  return (
    <div className="form__container">
      <div className="logIn__title-container">
        <h2>Bienvenue à nouveau...</h2>
        <h3>Veuillez entrer votre email et votre mot de passe</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="inputs__container">
          <div>
            <input
              type="email"
              name="username"
              id="username"
              placeholder="Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Mot de passe"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="logIn__btn-container">
          <CommonBtn
            textContent={"Se connecter"}
            bgColor={colorScss.mostImportantElementColor}
          />
          <motion.div
            whileHover={{ y: "-4px" }}
            whileTap={{ scale: 0.9 }}
            className="create__account"
          >
            <NavLink to="/signup">Créer un compte</NavLink>
          </motion.div>
        </div>
      </form>
      {errorMessage ? <p>Identifiant ou mot de passe incorrect !</p> : ""}
      {userLog ? <Navigate to="/private/private-home" /> : ""}
    </div>
  );
};
