import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { LogoJarvis } from "../UI-components/LogoJarvis/LogoJarvis";
import { setUserLog } from "../../ReduxToolKit/Reducers/userLog.slice";
import { setSearchPrivateHome } from "../../ReduxToolKit/Reducers/searchPrivateHome.slice";

export const Header = () => {
  // REDUX PART
  const dispatch = useDispatch();
  const userLog = useSelector((state) => state.userLog.userLog);

  // STATES
  const [toggleMenu, setToggleMenu] = useState(false);
  const [show, setShow] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);
  const [bgColorNav, setBgColorNav] = useState(false);
  const [logOutMenu, setLogOutMenu] = useState(false);

  // FUNCTIONS

  const toggleLogOut = () => {
    setLogOutMenu(!logOutMenu);
  };

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  const changeWidth = () => {
    setWidth(window.innerWidth);
  };

  const controlNavBar = () => {
    if (width < 900 && window.scrollY > 300) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  const controlBgNavBar = () => {
    if (width > 900 && window.scrollY > 70) {
      setBgColorNav(true);
    } else {
      setBgColorNav(false);
    }
  };

  // USE EFFECT

  useEffect(() => {
    window.addEventListener("resize", changeWidth);
    // cleanup function
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", controlNavBar);

    return () => {
      window.removeEventListener("scroll", controlNavBar);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", controlBgNavBar);

    return () => {
      window.removeEventListener("scroll", controlBgNavBar);
    };
  }, []);

  return (
    <header className={show ? "" : "headerFade"}>
      <nav className={bgColorNav ? "nav__fix-bg" : ""}>
        <div className="logo__container">
          <NavLink
            to="/private/private-home"
            onClick={() => dispatch(setSearchPrivateHome("empty"))}
          >
            <LogoJarvis />
          </NavLink>
        </div>

        <div
          className={toggleMenu ? "menuBtn open" : "menuBtn"}
          onClick={toggleNav}
        >
          <div className="menuBtnBurger"></div>
        </div>

        {(toggleMenu || width > 900) && (
          <div className="list__nav-container">
            <ul>
              <li onClick={() => dispatch(setSearchPrivateHome("empty"))}>
                <NavLink
                  onClick={toggleNav}
                  className={({ isActive }) =>
                    isActive ? "normalLinks activeLinks" : "normalLinks"
                  }
                  to="/private/private-home"
                >
                  Accueil
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={toggleNav}
                  className={({ isActive }) =>
                    isActive ? "normalLinks activeLinks" : "normalLinks"
                  }
                  to="/private/private-movies"
                >
                  Films
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={toggleNav}
                  className={({ isActive }) =>
                    isActive ? "normalLinks activeLinks" : "normalLinks"
                  }
                  to="/private/private-tvshows"
                >
                  Séries
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={toggleNav}
                  className={({ isActive }) =>
                    isActive ? "normalLinks activeLinks" : "normalLinks"
                  }
                  to="/private/private-music"
                >
                  Musique
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={toggleNav}
                  className={({ isActive }) =>
                    isActive ? "normalLinks activeLinks" : "normalLinks"
                  }
                  to="/private/private-videogames"
                >
                  Jeux vidéos
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={toggleNav}
                  className={({ isActive }) =>
                    isActive ? "normalLinks activeLinks" : "normalLinks"
                  }
                  to="/private/private-books"
                >
                  Livres
                </NavLink>
              </li>
              {width < 900 ? (
                <>
                  <li>
                    <NavLink
                      onClick={toggleNav}
                      className={({ isActive }) =>
                        isActive ? "normalLinks activeLinks" : "normalLinks"
                      }
                      to="/private/private-favorites"
                    >
                      Favoris
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={toggleNav}
                      className={({ isActive }) =>
                        isActive ? "normalLinks activeLinks" : "normalLinks"
                      }
                      to="/"
                    >
                      Se déconnecter
                    </NavLink>
                  </li>
                </>
              ) : (
                ""
              )}
            </ul>
            <div className="icons__container">
              <div>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "favorite__active" : ""
                  }
                  to="/private/private-favorites"
                >
                  <i className="ri-heart-line"></i>
                </NavLink>
              </div>
              <div className={logOutMenu ? "active__settings" : ""}>
                <i className="ri-settings-3-line" onClick={toggleLogOut}></i>
              </div>
            </div>
            <div>
              {logOutMenu ? (
                <motion.div
                  initial={{ x: 60, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="log-out__menu"
                  onClick={() => {
                    localStorage.removeItem("token");
                    dispatch(setUserLog(null));
                    toggleLogOut();
                  }}
                >
                  <p>Se déconnecter</p>
                </motion.div>
              ) : (
                ""
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
