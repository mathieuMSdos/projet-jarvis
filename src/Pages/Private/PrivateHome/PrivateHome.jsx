import React, { useEffect, useState } from "react";
import apiEndPoints from "../../../Utils/utilsApi";
import { MediaWheel } from "../../../Components/MediaWheel/MediaWheel";
import { SearchBar } from "../../../Components/SearchBar/SearchBar";
import { CardsAll } from "../../../Components/CardsAll/CardsAll";
import { LastMediasAdded } from "../../../Components/LastMediasAdded/LastMediasAdded";
import { BtnAddMedia } from "../../../Components/UI-components/BtnAddMedia/BtnAddMedia";
import { useDispatch } from "react-redux";
import { setSearchPrivateHome } from "../../../ReduxToolKit/Reducers/searchPrivateHome.slice";
import axios from "axios";
import { motion } from "framer-motion";
import { setUserRole } from "../../../ReduxToolKit/Reducers/userRole.slice";
import { SearchBarAllMedias } from "../../../Components/SearchBarAllMedias/SearchBarAllMedias";

export const PrivateHome = () => {
  // REDUX PART
  const dispatch = useDispatch();

  // REDUX PART
  const [userName, setUserName] = useState();

  // USEEFFECT

  useEffect(() => {
    dispatch(setSearchPrivateHome("empty"));
  }, []);

  // To get information about user
  useEffect(() => {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    if (token) {
      axios
        .get(`${apiEndPoints.apiAdress}${apiEndPoints.home}`, config)
        .then((res) => {
          setUserName(res.data.name);
          dispatch(setUserRole(res.data.role[0]));
        });
    }
  }, []);

  return (
    <div className="privateHome__container">
      <motion.div
        className="privateHome__hello-container"
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <h1>
          Hello <span>{userName}</span> !
        </h1>
      </motion.div>

      <motion.div
        className="privateHome__header"
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <SearchBarAllMedias />
      </motion.div>

      <div className="privateHome__content-container">
        <motion.div
          className="privateHome__cards-container"
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <CardsAll
            title={"Vos m??dias : "}
            emptySearchMessage={
              "Faite une recherche dans votre m??diath??que pour afficher vos m??dias"
            }
            globalState={"searchPrivateHome"}
            showMedia={true}
            addMediaBtn={false}
            deleteMediaBtn={true}
          />
        </motion.div>
        <motion.div
          className="mediaWheel__container"
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.4, delay: 0.8 }}
        >
          <MediaWheel />
        </motion.div>
      </div>

      <motion.div
        className="lastMedias__container"
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <LastMediasAdded
          title={"Derniers films ajout??s"}
          latestData={"latestMovie"}
          endPoint={"movies"}
        />
      </motion.div>

      <motion.div
        className="lastMedias__container"
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <LastMediasAdded
          title={"Derni??res s??ries ajout??es"}
          latestData={"latestTvShow"}
          endPoint={"tvshows"}
        />
      </motion.div>
    </div>
  );
};
