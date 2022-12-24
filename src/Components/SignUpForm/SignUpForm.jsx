import axios from "axios";
import React, { useEffect, useState } from "react";
import apiEndPoints from "../../Utils/utilsApi";
import { motion } from "framer-motion";
import { ValidationSubmitModal } from "../UI-components/ValidationSubmitModal/ValidationSubmitModal";
import { useNavigate } from "react-router-dom";

export const SignUpForm = () => {
  // ------------- STATES -------------
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submit, setSubmit] = useState(null);
  const navigate = useNavigate();

  // error/sucess after fields checking/validation of content
  //use them to show or hide error messages
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [successSubmitMessage, setSuccessSubmitMessage] = useState(false);

  // ------------- FUNCTIONS -------------

  const emailCheck = (email) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setErrorEmail(false);
    } else {
      setErrorEmail(true);
    }
  };

  const passwordCheck = () => {
    if (password !== confirmPassword) {
      setErrorPassword(true);
    } else {
      setErrorPassword(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccessSubmitMessage(false);

    if (password === confirmPassword && errorEmail === false) {
      const dataUser = {
        name: username,
        email: email,
        password: password,
      };
      setSubmit(dataUser);

      // clear fields after submit
      setUsername("");
      setPassword("");
      setConfirmPassword("");
      setEmail("");

      setSuccessSubmitMessage(true);
    } else {
      setErrorPassword(true);
    }
  };

  useEffect(() => {
    try {
      if (submit) {
        // post request to database to send informations of subscriber
        // axios.post(apiEndPoints.apiAdress + apiEndPoints.signUp, submit);
        axios
          .post(
            `${apiEndPoints.urlSignUp}${apiEndPoints.create_account}`,
            submit
          )
          .then((res) => {
            console.log(res.status);
            if (res.status === 201) {
              console.log("inscription réussi");
            }
          });
      }
    } catch (error) {
      if (error === 500) {
        console.log("erreur d'inscription, veuillez réessayer");
      }
    }
  }, [submit]);

  // to redirect user to login page after signup
  useEffect(() => {
    if (successSubmitMessage) {
      setTimeout(() => {
        navigate("/");
      }, "2000");
    }
  }, [successSubmitMessage]);

  return (
    <div className="signUp__form-container">
      <div className="signUp__title-container">
        <h2>Bienvenue sur Jarvis...</h2>
        <h3>Veuillez renseigner ces informations</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="signUp__inputs-container">
          <input
            type="text"
            name="username"
            id="username"
            minLength="4"
            placeholder="Nom d'utilisateur"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            // verify if the field match the regEx
            onBlur={() => {
              emailCheck(email);
            }}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Mot de passe"
            id="password"
            minLength="6"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            minLength="6"
            placeholder="Confirmer le mot de passe"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            // verify if the field match the first password
            onBlur={() => {
              passwordCheck();
            }}
            required
          />
        </div>
        <div className="signUp__error-messages">
          {errorPassword ? (
            <h3>
              <span>&#9940;</span> Les mots de passes ne sont pas identiques
            </h3>
          ) : (
            ""
          )}
          {errorEmail ? (
            <h3>
              <span>&#9940;</span> Adresse email invalide
            </h3>
          ) : (
            ""
          )}
        </div>
        <motion.button
          whileHover={{ y: "-4px" }}
          whileTap={{ scale: 0.9 }}
          type="submit"
          className="button"
        >
          S'inscrire
        </motion.button>
      </form>

      {successSubmitMessage ? <p>Inscription réussi !</p> : ""}
    </div>
  );
};
