import apiEndPoints from "../../Utils/utilsApi";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { SingleCard } from "../CardsAll/SingleCard/SingleCard";
import { BtnRandomMediaWheel } from "../UI-components/BtnRandomMediaWheel/BtnRandomMediaWheel";
import { motion } from "framer-motion";

export const MediaWheel = () => {
  const [mediaListData, setMediaListData] = useState();
  const [randomMedia, setRandomMedia] = useState();

  const mediaWheelRandom = useSelector(
    (state) => state.mediaWheelRandom.mediaWheelRandom
  );

  //function to choose a random item inside an array by his index

  const getRandomItem = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
  };

  //get all media list
  useEffect(() => {
    // CODE WORKS WITH JSON SERVER BEFORE CONNECT TO THE BACKEND

    //   axios.get("http://localhost:3000/randomMedia").then((res) => {
    //     setMediaListData(res.data);
    //   });
    // }, []);

    // CODE WORKS AFTER CONNECTED FRONT AND BACK

    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    if (token) {
      axios
        .get(`${apiEndPoints.apiAdress}${apiEndPoints.movies}`, config)
        .then((res) => {
          setMediaListData(res.data);
        });
    }
  }, []);

  //get a random media from the list and put the random media data inside a randomMedia state

  useEffect(() => {
    if (mediaListData) {
      setRandomMedia(getRandomItem(mediaListData));
    }
  }, [mediaListData]);

  useEffect(() => {
    if (mediaWheelRandom) {
      setRandomMedia(mediaWheelRandom);
    }
  }, [mediaWheelRandom]);

  return (
    <div className="mediaWheel__component-container">
      <div className="mediaWheel__header">
        <motion.h2
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.4, delay: 1 }}
        >
          Média au hasard...
        </motion.h2>
      </div>
      <motion.div
        className="mediaWheel__content"
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.4, delay: 1.3 }}
      >
        {randomMedia ? (
          <SingleCard
            mediaDatas={randomMedia}
            endPoint={"movies"}
            showMedia={true}
          />
        ) : (
          ""
        )}
      </motion.div>
      <div
        className="mediaWheel__btn-container"
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.4, delay: 1.5 }}
      >
        <BtnRandomMediaWheel
          mediaListData={mediaListData}
          randomItem={getRandomItem}
        />
      </div>
    </div>
  );
};
